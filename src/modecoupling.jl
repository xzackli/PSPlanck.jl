
@enum MapType ∅∅ II QQ UU TT PP TP

# index for the mask spectra V
const VIndex = Tuple{MapType, String, String}

# Index for the covariance's weighted mask spectra W, indexed X, Y, i, j, α, p, q, β
const WIndex = Tuple{MapType, MapType, String, String, MapType, String, String, MapType}

struct SpectralWorkspace{T <: Real}
    field_names::NTuple{4, String}

    # for mode coupling matrices
    V_spectra::DefaultDict{VIndex, SpectralVector{T}}

    # for covariances
    w_coeff::DefaultDict{Tuple{MapType, String, String, MapType}, Alm{Complex{T}}}
    W_spectra::DefaultDict{WIndex, SpectralVector{T}}
end

function SpectralWorkspace(m_i::Field{T}, m_j::Field{T}, 
                             m_p::Field{T}, m_q::Field{T}) where {T}
    field_names = (m_i.name, m_j.name, m_p.name, m_q.name)
    lmax = 3 * m_i.maskT.resolution.nside - 1

    zero_alm = Alm(lmax, lmax, Zeros{Complex{T}}(numberOfAlms(lmax, lmax)))
    zero_cl = SpectralVector(collect(Zeros{T}(lmax+1)))

    return SpectralWorkspace{T}(
        field_names, 
        DefaultDict{VIndex, SpectralVector{T}}(zero_cl),
        DefaultDict{Tuple{MapType, String, String, MapType}, Alm{Complex{T}}}(zero_alm),
        DefaultDict{WIndex, SpectralVector{T}}(zero_cl)
    )
end