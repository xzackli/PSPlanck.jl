
"""
Projector function for temperature.
"""
function ΞTT(W_arr::SpectralVector{T, AA}, 
             w3j²::WignerSymbolVector{T, Int}, 
             ℓ₁::Int, ℓ₂::Int) where {T, AA}
    Ξ = zero(T)
    ℓ₃_start = max(firstindex(w3j²), firstindex(W_arr))
    ℓ₃_end = min(lastindex(w3j²), lastindex(W_arr))
    @inbounds @simd for ℓ₃ ∈ ℓ₃_start:ℓ₃_end
        Ξ += (2ℓ₃ + 1) * w3j²[ℓ₃] * W_arr[ℓ₃]
    end
    return Ξ / (4π)
end
ΞTT(W_arr::SpectralVector{T, AA}, w3j²::WignerSymbolVector{T, Int}, 
    ℓ₁::Int, ℓ₂::Int) where {T, AA<:Zeros} = zero(T)


# inner MCM loop
function loop_mcm!(mcm::SpectralArray{T,2}, lmax::Integer, 
                   VTTij::SpectralVector{T}) where {T}
    thread_buffers = get_thread_buffers(T, 2*lmax+1)
    
    @qthreads for ℓ₁ in 0:lmax
        buffer = thread_buffers[Threads.threadid()]
        for ℓ₂ in ℓ₁:lmax
            w = WignerF(T, ℓ₁, ℓ₂, 0, 0)  # set up the wigner recurrence
            buffer_view = uview(buffer, 1:length(w.nₘᵢₙ:w.nₘₐₓ))  # preallocated buffer
            w3j² = WignerSymbolVector(buffer_view, w.nₘᵢₙ:w.nₘₐₓ)
            wigner3j_f!(w, w3j²)  # deposit symbols into buffer
            w3j².symbols .= w3j².symbols .^ 2  # square the symbols
            m12 = (2ℓ₂ + 1) * ΞTT(VTTij, w3j², ℓ₁, ℓ₂)
            mcm[ℓ₁, ℓ₂] = m12
            mcm[ℓ₂, ℓ₁] = m12
        end
    end
    return mcm
end

function compute_mcm(workspace::SpectralWorkspace{T}, 
                     name_i::String, name_j::String; lmax::Int=0) where {T}
    
    lmax = iszero(lmax) ? workspace.lmax : lmax
    VTTij = SpectralVector(alm2cl(workspace.masks[name_i], workspace.masks[name_j]))
    workspace.V_spectra[TT, name_i, name_j] = VTTij
    mcm = SpectralArray(zeros(T, (lmax+1, lmax+1)))
    return loop_mcm!(mcm, lmax, VTTij)
end

function compute_spectra(map_1::Map{T}, map_2::Map{T}, 
                         factorized_mcm::Cholesky{T,Array{T,2}},
                         Bℓ_1::SpectralVector{T}, Bℓ_2::SpectralVector{T}) where T
    Cl_hat = alm2cl(map2alm(map_1), map2alm(map_2))
    ldiv!(factorized_mcm, Cl_hat)
    return Cl_hat ./ (Bℓ_1.parent .* Bℓ_2.parent)
end
