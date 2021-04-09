var documenterSearchIndex = {"docs":
[{"location":"module_index/#Index","page":"Index","title":"Index","text":"","category":"section"},{"location":"module_index/","page":"Index","title":"Index","text":"","category":"page"},{"location":"module_index/","page":"Index","title":"Index","text":"Modules = [AngularPowerSpectra]","category":"page"},{"location":"module_index/#AngularPowerSpectra.CovarianceWorkspace-Union{Tuple{T}, NTuple{4, CovField{T}}} where T","page":"Index","title":"AngularPowerSpectra.CovarianceWorkspace","text":"CovarianceWorkspace(m_i, m_j, m_p, m_q; lmax::Int=0)\n\nInputs and cache for covariance calculations. A covariance matrix relates the masks of four fields and spins. This structure caches various cross-spectra between masks and noise-weighted masks.\n\nArguments:\n\nm_i::CovField{T}: map i\nm_j::CovField{T}: map j\nm_p::CovField{T}: map p\nm_q::CovField{T}: map q\n\nKeywords\n\nlmax::Int=0: maximum multipole to compute covariance matrix\n\n\n\n\n\n","category":"method"},{"location":"module_index/#AngularPowerSpectra.SpectralArray-Union{Tuple{AbstractArray{T, N}}, Tuple{N}, Tuple{T}} where {T, N}","page":"Index","title":"AngularPowerSpectra.SpectralArray","text":"SpectralArray(A::AbstractArray, [ranges])\n\nA renamed OffsetArray. By default, it produces a 0-indexed array.\n\n\n\n\n\n","category":"method"},{"location":"module_index/#AngularPowerSpectra.SpectralVector-Tuple{AbstractVector{T} where T}","page":"Index","title":"AngularPowerSpectra.SpectralVector","text":"Alias for SpectralArray{T,1}\n\n\n\n\n\n","category":"method"},{"location":"module_index/#AngularPowerSpectra.channelindex-Tuple{Any}","page":"Index","title":"AngularPowerSpectra.channelindex","text":"channelindex(s)\n\nConvert string/char T,E,B => 1,2,3\n\nExamples\n\njulia> channelindex(\"E\")\n2\n\n\n\n\n\n","category":"method"},{"location":"module_index/#AngularPowerSpectra.coupledcov-Union{Tuple{T}, Tuple{Symbol, Symbol, CovarianceWorkspace{T}, AbstractDict}, Tuple{Symbol, Symbol, CovarianceWorkspace{T}, AbstractDict, AbstractDict}} where T","page":"Index","title":"AngularPowerSpectra.coupledcov","text":"coupledcov(ch1, ch2, workspace, spectra;\n           noise_ratios=Dict(), lmax=0) where T\n\nArguments:\n\nch1::Symbol: spectrum type of first spectrum (i.e. :TT, :TE, :EE)\nch2::Symbol: spectrum type of second spectrum (i.e. :TT, :TE, :EE)\nworkspace: cache for working with covariances\nspectra: signal spectra\n\nKeywords\n\nnoise_ratios::AbstractDict: ratio of noise spectra to white noise\nlmax=0: maximum multipole moment for covariance matrix\n\nReturns:\n\nSpectralArray{T,2}: covariance matrix (0-indexed)\n\n\n\n\n\n","category":"method"},{"location":"module_index/#AngularPowerSpectra.decouple_covmat-Union{Tuple{SA}, Tuple{T}, Tuple{SA, SA, SA}} where {T, SA<:(SpectralArray{T, 2, AA} where AA<:AbstractArray)}","page":"Index","title":"AngularPowerSpectra.decouple_covmat","text":"decouple_covmat(Y, B1, B2; lmin1=2, lmin2=2)\n\nDecouples a covariance matrix Y, performing B₁⁻¹ × M × (B₂⁻¹)^† by mutating M. Zeros out ℓ₁, ℓ₂ within BOTH lmin1 and lmin2 (i.e the corner).\n\n\n\n\n\n","category":"method"},{"location":"module_index/#AngularPowerSpectra.getblock-Union{Tuple{M_BLOCKS}, Tuple{T}, Tuple{BlockSpectralMatrix{T, M_BLOCKS, 1, AA} where AA, Int64}} where {T, M_BLOCKS}","page":"Index","title":"AngularPowerSpectra.getblock","text":"getblock(A::BlockSpectralMatrix{T,M_BLOCKS,1}, i) where {T,M_BLOCKS}\n\nExtract a sub-block from a BlockSpectralMatrix.\n\nArguments:\n\nA::BlockSpectralMatrix{T,M_BLOCKS,1}: array to extract from\ni::Int: index of the sub-block (1-indexed)\n\nReturns:\n\nArray{T,2}: sub-blocks\n\n\n\n\n\n","category":"method"},{"location":"module_index/#AngularPowerSpectra.kᵤ-Tuple{Type, Any}","page":"Index","title":"AngularPowerSpectra.kᵤ","text":"kᵤ([T=Float64], u)\n\nDefined only for u ∈ {-2, 0, 2}.\n\n\n\n\n\n","category":"method"},{"location":"module_index/#AngularPowerSpectra.mask!-Union{Tuple{T}, Tuple{Healpix.Map{T, O, AA} where {O<:Healpix.Order, AA<:AbstractVector{T}}, Healpix.Map{T, O, AA} where {O<:Healpix.Order, AA<:AbstractVector{T}}}} where T","page":"Index","title":"AngularPowerSpectra.mask!","text":"mask!(m::Map{T}, mask::Map{T}) where T\n\nConvenience function for applying a mask to a map.\n\n\n\n\n\n","category":"method"},{"location":"module_index/#AngularPowerSpectra.mcm-Union{Tuple{T}, Tuple{Symbol, Healpix.Alm{Complex{T}, AA} where AA<:AbstractArray{Complex{T}, 1}, Healpix.Alm{Complex{T}, AA} where AA<:AbstractArray{Complex{T}, 1}}} where T","page":"Index","title":"AngularPowerSpectra.mcm","text":"mcm(spec::Symbol, alm₁::Alm{T}, alm₂::Alm{T}; lmax=nothing)\n\nCompute the mode-coupling matrix. See the Spectral Analysis section in the documentation for examples. These are used by applying the  linear solve operator \\ to a SpectralArray{T,1}.\n\nChoices for spec:\n\n:TT, identical to M⁰⁰\n:TE, identical to :ET, :TB, :BT, :M⁰², :M²⁰\n:EE_BB, returns coupling matrix for stacked EE and BB vectors\n:EB_BE, returns coupling matrix for stacked EB and BE vectors\n:M⁺⁺, sub-block of spin-2 mode-coupling matrices\n:M⁻⁻, sub-block of spin-2 mode-coupling matrices\n\nArguments:\n\nspec::Symbol: cross-spectrum of the mode-coupling matrix\nalm₁::Alm{T}: first mask's spherical harmonic coefficients\nalm₂::Alm{T}: second mask's spherical harmonic coefficients\n\nKeywords\n\nlmin=0: minimum multiple for mode-coupling matrix\nlmax=nothing: maximum multipole for mode-coupling matrix\n\nReturns:\n\nthe mode coupling matrix. for single symbols, this returns a    SpectralArray{T,2}. if spec is :EE_BB or :EB_BE, returns a    BlockSpectralMatrix{T} with 2×2 blocks.\n\n\n\n\n\n","category":"method"},{"location":"module_index/#AngularPowerSpectra.quickpolW-Union{Tuple{T}, Tuple{Healpix.Alm{Complex{T}, AA} where AA<:AbstractArray{Complex{T}, 1}, Healpix.Alm{Complex{T}, AA} where AA<:AbstractArray{Complex{T}, 1}}} where T<:Number","page":"Index","title":"AngularPowerSpectra.quickpolW","text":"quickpolW(alm₁::Alm{Complex{T}}, alm₂::Alm{Complex{T}})\n\nComputes a scaled spectrum of the scan pattern.\n\nW_ell^nu_1nu_2s_1s_2j_1j_2 = sum_m^prime=-ell^prime^ell^prime\n    left(_s_1+nu_1tildeomega^(j_1)_ell^prime m^primeright)\n    left(_s_2+nu_2tildeomega^(j_2)_ell^prime m^primeright)^*\n\n\n\n\n\n","category":"method"},{"location":"module_index/#AngularPowerSpectra.quickpolΞ!-Union{Tuple{AA}, Tuple{T}, Tuple{AA, Any, Any, Any, Any, Healpix.Alm, Healpix.Alm, Array{Vector{T}, 1}, Array{Vector{T}, 1}}} where {T, AA<:(SpectralArray{T, 2, AA} where AA<:AbstractArray)}","page":"Index","title":"AngularPowerSpectra.quickpolΞ!","text":"quickpolΞ!(𝚵::AA, ν₁, ν₂, s₁, s₂, ω₁, ω₂)\n\nThis computes the Xi_ell^prime primeell matrix. It assumes rho has been absorbed into the omega terms.\n\nω₁: effective scan weights with spin s₁ + ν₁\nω₂: effective scan weights with spin s₂ + ν₂\n\n\n\n\n\n","category":"method"},{"location":"module_index/#AngularPowerSpectra.spectralones-Tuple{Vararg{Int64, N} where N}","page":"Index","title":"AngularPowerSpectra.spectralones","text":"spectralones(size1::Int, size2::Int, ...)\nspectralones(range1::AbstractRange, range2::AbstractRange, ...)\n\nUtility function for generating a SpectralArray by passing arguments of ranges or sizes, just like ones.\n\n\n\n\n\n","category":"method"},{"location":"module_index/#AngularPowerSpectra.spectralzeros-Tuple{Vararg{Int64, N} where N}","page":"Index","title":"AngularPowerSpectra.spectralzeros","text":"spectralzeros(size1, size2, ...)\nspectralzeros(range1, range2, ...)\n\nUtility function for generating a SpectralArray by passing arguments of ranges or sizes, just like zeros.\n\n\n\n\n\n","category":"method"},{"location":"module_index/#AngularPowerSpectra.synalm!-Union{Tuple{T}, Tuple{Random.AbstractRNG, AbstractArray{T, 3}, Vector{T} where T}} where T","page":"Index","title":"AngularPowerSpectra.synalm!","text":"synalm!([rng=GLOBAL_RNG], Cl::AbstractArray{T,3}, alms::Vector{Alm{Complex{T}}}) where T\n\nIn-place synthesis of spherical harmonic coefficients, given spectra.\n\nArguments:\n\nCl::AbstractArray{T,3}: array with dimensions of comp, comp, ℓ\nalms::Vector: array of Alm to fill\n\nExamples\n\nnside = 16\nC0 = [3.  2.;  2.  5.]\nCl = repeat(C0, 1, 1, 3nside)  # spectra constant with ℓ\nalms = [Alm{Complex{Float64}}(3nside-1, 3nside-1) for i in 1:2]\nsynalm!(Cl, alms)\n\n\n\n\n\n","category":"method"},{"location":"module_index/#AngularPowerSpectra.synalm-Union{Tuple{T}, Tuple{Random.AbstractRNG, AbstractArray{T, 3}, Int64}} where T","page":"Index","title":"AngularPowerSpectra.synalm","text":"synalm([rng=GLOBAL_RNG], Cl::AbstractArray{T,3}, nside::Int) where T\n\nArguments:\n\nCl::AbstractArray{T,3}: array with dimensions of comp, comp, ℓ\nnside::Int: healpix resolution\n\nReturns:\n\nVector{Alm{T}}: spherical harmonics realizations for each component\n\nExamples\n\nnside = 16\nC0 = [3.  2.;  2.  5.]\nCl = repeat(C0, 1, 1, 3nside)  # spectra constant with ℓ\nalms = synalm(Cl, nside)\n\n\n\n\n\n","category":"method"},{"location":"module_index/#AngularPowerSpectra.Ξsum-Union{Tuple{T}, Tuple{SpectralVector{T, AA} where AA<:AbstractArray, WignerFamilies.WignerSymbolVector{T, Int64, AA} where AA<:AbstractVector{T}, WignerFamilies.WignerSymbolVector{T, Int64, AA} where AA<:AbstractVector{T}}} where T<:Number","page":"Index","title":"AngularPowerSpectra.Ξsum","text":"Ξsum(alm₁, alm₂, w3j₁, w3j₂)\n\nSum over ell and m of two a_ell m and nontrivial Wigner-3j vectors. This is a step in computing the mathbfXi matrix. The rho factors are not in this summation, as they can be pulled out.\n\nbeginaligned\n(Xi mathrmsum) = sum_ell^prime m^prime   W_ell^nu_1nu_2s_1s_2j_1j_2 times beginpmatrix ell  ell^prime  ell^primeprime \n     -s_1  s_1+nu_1   -nu_1 endpmatrix beginpmatrix\n     ell  ell^prime  ell^primeprime  -s_2  s_2+nu_2   -nu_2 endpmatrix\nendaligned\n\n\n\n\n\n","category":"method"},{"location":"module_index/#AngularPowerSpectra.@spectra-Tuple{Any}","page":"Index","title":"AngularPowerSpectra.@spectra","text":"@spectra\n\nUnpack a block vector. This is equivalent to calling getblock for all the  sub-blocks and putting them in a Tuple.\n\n\n\n\n\n","category":"macro"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"CurrentModule = AngularPowerSpectra","category":"page"},{"location":"spectra/#Spectral-Analysis","page":"Spectra","title":"Spectral Analysis","text":"","category":"section"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"In this section, we describe how one can estimate unbiased cross-spectra from masked maps using this package. We expand fluctuations on the sphere in terms of spherial harmonics, with coefficients ","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"a_ell m = iint Theta(mathbfhatn) Y_ell m^* (mathbfhatn)  dOmega","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"We then define the power spectrum C_ell of these fluctuations,","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"langle a_ell m^X a_ell^prime m^prime^Y* rangle = delta_ell ell^prime delta_m m^prime C_ell","category":"page"},{"location":"spectra/#Mode-Coupling-for-TT,-TE,-TB","page":"Spectra","title":"Mode Coupling for TT, TE, TB","text":"","category":"section"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"If you compute the cross-spectrum of masked maps, the mask will couple together different modes ell_1 ell_2. This biased estimate of the true spectrum is termed the pseudo-spectrum widetildeC_ell, ","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"widetildeC_ell = frac12ell+1 sum_m mathsfm^iX_ell m mathsfm^jY_ell m","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"where mathsfm^iX_ell m are the spherical harmonic coefficients of the masked map i of channel X in T E B. In the pseudo-C_ell method, we seek an estimate hatC_ell of the true spectrum that is related to the pseudo-spectrum by a linear operator,","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"   langlewidetildeC_ellrangle = mathbfM^XY(ij)_ell_1 ell_2 langle C_ell rangle","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"where mathbfM^XY(ij)_ell_1 ell_2 is the mode-coupling matrix between fields i and j for spectrum XY. The expectation value langle cdots rangle in this expression is over all realizations of a_ell m, since the mask is not isotropic. Applying the inverse of the mode-coupling matrix to the pseudo-spectrum widetildeC_ell yields an unbiased and nearly optimal estimate hatC_ell of the true spectrum. To compute the mode-coupling matrix, one needs","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"XY, the desired spectrum, i.e. TE\nmathsfm^iX_ell m, spherical harmonic coefficients of the mask for map i, mode X\nmathsfm^jY_ell m, spherical harmonic coefficients of the mask for map j, mode Y","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"A basic functionality of this package is to compute this matrix. Let's look at a basic example of the cross-spectrum between two intensity maps.","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"# get some example masks\nusing Healpix, AngularPowerSpectra\nmask1 = readMapFromFITS(\"test/data/mask1_T.fits\", 1, Float64)\nmask2 = readMapFromFITS(\"test/data/mask2_T.fits\", 1, Float64)\n\n# compute TT mode-coupling matrix from mask harmonic coefficients\nM = mcm(:TT, map2alm(mask1), map2alm(mask2))","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"Similarly, one could have specified the symbol :TE, :TE, or :ET for other types of cross-spectra[1]. The function mcm returns a SpectralArray{T,2}, which is an array type that contains elements in ell_mathrmmin leq ell_1 ell_2 leq ell_mathrmmax. The important thing about SpectralArray is that indices correspond to ell, such that M[ℓ₁, ℓ₂] corresponds to the mode-coupling matrix entry mathbfM_ell_1 ell_2. If you want to access the underlying array, you can use parent(mcm).. One can optionally truncate the computation with the lmax keyword, i.e. mcm(:TT, mask1, mask2; lmin=2, lmax=10). ","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"[1]: You can combine symbols, in cases where you're looping over combinations of spectra, by using Symbol.julia> Symbol(:T, :T)\n:TT","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"Now one can apply a linear solve to decouple the mask. We define a special operator Cl = M \\ₘ pCl to perform mode decoupling on SpectralArray and SpectralVector. This operation performs a linear solve on ell_mathrmmin leq ell leq ell_mathrmmax, the minimum and maximum indices of the mode-coupling matrix. It leaves the elements outside of those ell-ranges untouched in pCl.","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"Here's an example that uses the mode-coupling matrix from above to obtain spectra from masked maps.","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"# generate two uniform maps\nnside = mask1.resolution.nside\nnpix = nside2npix(nside)\nmap1 = Map{Float64, RingOrder}(ones(npix))\nmap2 = Map{Float64, RingOrder}(ones(npix))\n\n# mask the maps with different masks\nmap1.pixels .*= mask1.pixels\nmap2.pixels .*= mask2.pixels\n\n# compute the pseudo-spectrum, and wrap it in a SpectralVector\nalm1, alm2 = map2alm(map1), map2alm(map2)\npCl = SpectralVector(alm2cl(alm1, alm2))\n\n# decouple the spectrum\nCl = M \\ pCl","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"You should subtract the monopole and dipole from your maps. Note that you can pass lmin to mcm. Most other mode-coupling codes start the mode-coupling calculation at ell_mathrmmin = 2. ","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"using IdentityRanges  # range for preserving SpectralArrays index info in slices\npCl = SpectralVector(alm2cl(alm1, alm2))[IdentityRange(2:end)]  # start at dipole\nM = mcm(:TT, map2alm(mask1), map2alm(mask2); lmin=2)            # start at dipole\nCl = M \\ pCl  # SpectralArray with indices 2:end","category":"page"},{"location":"spectra/#Mode-Coupling-for-EE,-EB,-BB","page":"Spectra","title":"Mode Coupling for EE, EB, BB","text":"","category":"section"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"The mode coupling on spin-2 times spin-2 (:EE, :EB, :BB) is slightly more complicated. For a more detailed description, please see Thibaut Louis's notes.","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"tiny\n beginbmatrix \n langle widetildeC^T_nu_1T_nu_2_ell_1 rangle cr\n  langle widetildeC^T_nu_1E_nu_2_ell_1 rangle cr \n  langle widetildeC^T_nu_1B_nu_2_ell_1 rangle  cr \n  langle widetildeC^E_nu_1T_nu_2_ell_1 rangle  cr \n  langle widetildeC^B_nu_1T_nu_2_ell_1 rangle  cr \n  langle widetildeC^E_nu_1E_nu_2_ell_1 rangle  cr \n  langle widetildeC^B_nu_1B_nu_2_ell_1 rangle cr\n  langle widetildeC^E_nu_1B_nu_2_ell_1 rangle cr  \n  langle widetildeC^B_nu_1E_nu_2_ell_1 rangle \n  endbmatrix = sum_ell_2\nbeginbmatrix \nmathbfM^nu_1nu_200_ell_1 ell_2  0  0  0  0  0  0  0  0 \ncr\n0  mathbfM^nu_1nu_202_ell_1 ell_2  0  0  0  0  0  0  0  \ncr\n0  0  mathbfM^nu_1nu_202_ell_1 ell_2  0  0  0  0  0  0 \ncr\n0  0  0  mathbfM^nu_1nu_202_ell_1 ell_2  0  0  0  0  0 \ncr\n0  0   0  0  mathbfM^nu_1nu_202_ell_1 ell_2  0  0  0  0 \ncr\n0  0  0  0  0  mathbfM^nu_1nu_2++_ell_1 ell_2  mathbfM^nu_1nu_2--_ell_1 ell_2  0  0 \ncr\n0  0  0  0  0  mathbfM^nu_1nu_2--_ell_1 ell_2  mathbfM^nu_1nu_2++_ell_1 ell_2  0  0 \ncr\n0 0 0 0  0  0  0  mathbfM^nu_1nu_2++_ell_1 ell_2   -mathbfM^nu_1nu_2--_ell_1 ell_2  \ncr\n0  0  0  0  0  0  0  -mathbfM^nu_1nu_2--_ell_1 ell_2  mathbfM^nu_1nu_2++_ell_1 ell_2 \nendbmatrix\nbeginbmatrix langle C^T_nu_1T_nu_2_ell_2 rangle  cr langle C^T_nu_1E_nu_2_ell_2 rangle  cr langle C^T_nu_1B_nu_2_ell_2 rangle  cr langle C^E_nu_1T_nu_2_ell_2 rangle  cr langle C^B_nu_1T_nu_2_ell_2 rangle  cr \nlangle C^E_nu_1E_nu_2_ell_2 rangle  cr \nlangle C^B_nu_1B_nu_2_ell_2 rangle cr\nlangle C^E_nu_1B_nu_2_ell_2 rangle cr  \nlangle C^B_nu_1E_nu_2_ell_2 rangle  \nendbmatrix","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"Note that the (00), (02), and (20) combinations from the previous section are block-diagonal. Thus we define ","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"beginaligned\n    mathbfM^nu_1 nu_2 TT_ell_1 ell_2 = mathbfM^nu_1 nu_2 00_ell_1 ell_2 \n    mathbfM^nu_1 nu_2 TE_ell_1 ell_2 = mathbfM^nu_1 nu_2 TB_ell_1 ell_2 = mathbfM^nu_1 nu_2 02_ell_1 ell_2 \n    mathbfM^nu_1 nu_2 ET_ell_1 ell_2 = mathbfM^nu_1 nu_2 BT_ell_1 ell_2 = mathbfM^nu_1 nu_2 20_ell_1 ell_2\nendaligned","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"The previous section showed how to compute these matrices, by passing :TT, :TE, :TB, :ET, or :BT to mcm. We now define two additional block matrices,","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"mathbfM^nu_1 nu_2 EEBB_ell_1 ell_2 = left\nbeginarraycc\nmathbfM^nu_1nu_2++_ell_1 ell_2  mathbfM^nu_1nu_2--_ell_1 ell_2 \n mathbfM^nu_1nu_2--_ell_1 ell_2  mathbfM^nu_1nu_2++_ell_1 ell_2 \nendarray right qquad\nmathbfM^nu_1 nu_2 EBBE_ell_1 ell_2 = left\nbeginarraycc\nmathbfM^nu_1nu_2++_ell_1 ell_2   -mathbfM^nu_1nu_2--_ell_1 ell_2 \n-mathbfM^nu_1nu_2--_ell_1 ell_2  mathbfM^nu_1nu_2++_ell_1 ell_2  \nendarray\nright","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"These matrices are defined such that","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"left\nbeginarrayc\nlangle widetildeC^E_nu_1E_nu_2_ell_1 rangle  \nlangle widetildeC^B_nu_1B_nu_2_ell_1 rangle \nendarray\nright = sum_ell_2 mathbfM^nu_1 nu_2 EEBB_ell_1 ell_2 left\nbeginarrayc\nlangle C^E_nu_1E_nu_2_ell_2 rangle  \nlangle C^B_nu_1B_nu_2_ell_2 rangle \nendarray\nright","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"left\nbeginarrayc\nlangle widetildeC^E_nu_1B_nu_2_ell_1 rangle  \nlangle widetildeC^B_nu_1E_nu_2_ell_1 rangle \nendarray\nright = sum_ell_2 mathbfM^nu_1 nu_2 EBBE_ell_1 ell_2 left\nbeginarrayc\nlangle C^E_nu_1B_nu_2_ell_2 rangle  \nlangle C^B_nu_1E_nu_2_ell_2 rangle \nendarray\nright","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"You can compute these matrices by passing :EE_BB and :EB_BE as the first argument to mcm. You can produce both matrices at once by passing a Tuple, (:EE_BB, :EB_BE) and get back a tuple containing the two matrices, which can be efficient since the these two block matrices share the same blocks. You can also obtain the sub-blocks mathbfM^nu_1nu_2++_ell_1 ell_2 and mathbfM^nu_1nu_2--_ell_1 ell_2 by passing to mcm the symbols :M⁺⁺ and :M⁻⁻ (note the Unicode superscripts). ","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"# compute stacked EE,BB mode-coupling matrix from mask alm\nM_EE_BB = mcm(:EE_BB, map2alm(mask1), map2alm(mask2))\n\n# make up some coupled pseudo-spectra\npCl_EE, pCl_BB = pCl, pCl\n\n# apply the 2×2 block mode-coupling matrix to the stacked EE and BB spectra\n@spectra Cl_EE, Cl_BB = M_EE_BB \\ [pCl_EE; pCl_BB]","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"The @spectra macro unpacks the blocks of the block-vector[2]. The matrix syntax in Julia performs concatenation when the inputs are arrays, so [pCl_EE; pCl_BB] stacks the vectors vertically.","category":"page"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"[2]: The @spectra macro used there is equivalent toCl = M_EE_BB \\ [pCl_EE; pCl_BB]\nCl_EE, Cl_BB = getblock(Cl, 1), getblock(Cl, 2)","category":"page"},{"location":"spectra/#API","page":"Spectra","title":"API","text":"","category":"section"},{"location":"spectra/","page":"Spectra","title":"Spectra","text":"mcm","category":"page"},{"location":"spectra/#AngularPowerSpectra.mcm","page":"Spectra","title":"AngularPowerSpectra.mcm","text":"mcm(spec::Symbol, alm₁::Alm{T}, alm₂::Alm{T}; lmax=nothing)\n\nCompute the mode-coupling matrix. See the Spectral Analysis section in the documentation for examples. These are used by applying the  linear solve operator \\ to a SpectralArray{T,1}.\n\nChoices for spec:\n\n:TT, identical to M⁰⁰\n:TE, identical to :ET, :TB, :BT, :M⁰², :M²⁰\n:EE_BB, returns coupling matrix for stacked EE and BB vectors\n:EB_BE, returns coupling matrix for stacked EB and BE vectors\n:M⁺⁺, sub-block of spin-2 mode-coupling matrices\n:M⁻⁻, sub-block of spin-2 mode-coupling matrices\n\nArguments:\n\nspec::Symbol: cross-spectrum of the mode-coupling matrix\nalm₁::Alm{T}: first mask's spherical harmonic coefficients\nalm₂::Alm{T}: second mask's spherical harmonic coefficients\n\nKeywords\n\nlmin=0: minimum multiple for mode-coupling matrix\nlmax=nothing: maximum multipole for mode-coupling matrix\n\nReturns:\n\nthe mode coupling matrix. for single symbols, this returns a    SpectralArray{T,2}. if spec is :EE_BB or :EB_BE, returns a    BlockSpectralMatrix{T} with 2×2 blocks.\n\n\n\n\n\n","category":"function"},{"location":"covariance/","page":"Covariance","title":"Covariance","text":"CurrentModule = AngularPowerSpectra","category":"page"},{"location":"covariance/#Covariance-Estimation","page":"Covariance","title":"Covariance Estimation","text":"","category":"section"},{"location":"covariance/","page":"Covariance","title":"Covariance","text":"The covariance between two spectra textrmCov(hatC_ell^XYij hatC_ell^WZpq) for channels XYWZ in T E obtained from masked maps can be expressed using","category":"page"},{"location":"covariance/","page":"Covariance","title":"Covariance","text":"spherical harmonic coefficients of the masks of the four maps i j p q involved in the covariance\nassumed signal spectrum C_ellmathrmtot^XY, for example C_ell^mathrmth + C_ell^mathrmfgij\npixel variance maps sigma_p^XX for XX in II QQ UU for the four maps involved in the covariance","category":"page"},{"location":"covariance/","page":"Covariance","title":"Covariance","text":"However, these are only sufficient for a description of a homogeneous survey with white noise and sufficient mask apodization. Two additional corrections are required for sim1 covariance determinations.","category":"page"},{"location":"covariance/","page":"Covariance","title":"Covariance","text":"noise power spectra hatN_ell^XYij for the involved channels\ncorrections to the diagonals of the covariance matrices from insufficient apodization around point sources","category":"page"},{"location":"covariance/","page":"Covariance","title":"Covariance","text":"The basic calculation is essentially a mode-coupling calculation, and mode-coupling matrices are themselves used to correct the covariance matrix at the end. The methods in this package were written to match the analysis of the Planck satellite, and we provide a more detailed description of these methods in Li et al. 2020 (in prep). The derivation of these covariance matrices, in the limit of uniform noise, are available in Thibaut Louis's excellent notes.","category":"page"},{"location":"covariance/","page":"Covariance","title":"Covariance","text":"The mode-coupling matrix is essentially a linear operator on the cross-spectrum of the masks. In contrast, the expressions for the covariance matrix tend to reuse the same expressions many times, and one tends also to compute several different covariance matrices (i.e. TTTT, TETE, TTTE) on the same maps. The covariance calculation in AngularPowerSpectra.jl is centered around the CovarianceWorkspace, which caches the various quantities that are re-used during covariance estimation.","category":"page"},{"location":"covariance/#Computing-the-Covariance","page":"Covariance","title":"Computing the Covariance","text":"","category":"section"},{"location":"covariance/","page":"Covariance","title":"Covariance","text":"First, let's set up the required data – masks and variances. The variance is a Healpix.PolarizedMap containing the fields i, q, u. In this example, we read the masks from disk, but set the variances for everything to 1.","category":"page"},{"location":"covariance/","page":"Covariance","title":"Covariance","text":"using Healpix, AngularPowerSpectra\nmask1_T = readMapFromFITS(\"test/data/mask1_T.fits\", 1, Float64)\nmask2_T = readMapFromFITS(\"test/data/mask2_T.fits\", 1, Float64)\nmask1_P = readMapFromFITS(\"test/data/mask1_T.fits\", 1, Float64)\nmask2_P = readMapFromFITS(\"test/data/mask2_T.fits\", 1, Float64)\n\n# for this example, pixel variance = 1\nunit_var = PolarizedMap{Float64, RingOrder}(nside)\nunit_var.i .= 1.0\nunit_var.q .= 1.0\nunit_var.u .= 1.0","category":"page"},{"location":"covariance/","page":"Covariance","title":"Covariance","text":"Once you have the masks and variances, you can create a CovField for each field involved. This structure also has an associated name, which is used for the signal spectra.","category":"page"},{"location":"covariance/","page":"Covariance","title":"Covariance","text":"# set up CovField, we're computing the variance of a spectrum on (f1 × f2)\nf1 = CovField(\"143_hm1\", mask1_T, mask1_P, unit_var)\nf2 = CovField(\"143_hm2\", mask2_T, mask2_P, unit_var)\nf3 = f1\nf4 = f2\n\n# compute covariance between the (f1 × f2) spectrum and (f3 × f4) spectrum  \nworkspace = CovarianceWorkspace(f1, f2, f3, f4)","category":"page"},{"location":"covariance/","page":"Covariance","title":"Covariance","text":"A covariance matrix calculation needs an assumed signal spectrum for each channel you want.  You need to generate a dictionary that maps the names of various cross-spectra to SpectralVector.","category":"page"},{"location":"covariance/","page":"Covariance","title":"Covariance","text":"nside = mask1.resolution.nside\ncl_th = SpectralVector(ones(nside2lmax(nside)))\n\nspectra = Dict{SpectrumName, SpectralVector{Float64, Vector{Float64}}}(\n    (:TT, \"143_hm1\", \"143_hm1\") => cl_th, (:TT, \"143_hm1\", \"143_hm2\") => cl_th,\n    (:TT, \"143_hm2\", \"143_hm1\") => cl_th, (:TT, \"143_hm2\", \"143_hm2\") => cl_th,\n\n    (:EE, \"143_hm1\", \"143_hm1\") => cl_th, (:EE, \"143_hm1\", \"143_hm2\") => cl_th,\n    (:EE, \"143_hm2\", \"143_hm1\") => cl_th, (:EE, \"143_hm2\", \"143_hm2\") => cl_th ,\n\n    (:TE, \"143_hm1\", \"143_hm1\") => cl_th, (:TE, \"143_hm1\", \"143_hm2\") => cl_th,\n    (:TE, \"143_hm2\", \"143_hm1\") => cl_th, (:TE, \"143_hm2\", \"143_hm2\") => cl_th)","category":"page"},{"location":"covariance/","page":"Covariance","title":"Covariance","text":"Now all that remains is to compute the coupled covmat.","category":"page"},{"location":"covariance/","page":"Covariance","title":"Covariance","text":"C = coupledcov(:TT, :TT, workspace, spectra)","category":"page"},{"location":"covariance/#API","page":"Covariance","title":"API","text":"","category":"section"},{"location":"covariance/","page":"Covariance","title":"Covariance","text":"CovField\nCovarianceWorkspace\ncoupledcov","category":"page"},{"location":"covariance/#AngularPowerSpectra.CovField","page":"Covariance","title":"AngularPowerSpectra.CovField","text":"CovField(name, maskT, maskP,\n    σ²II::Map{T, O, AA}, σ²QQ::Map{T, O, AA}, σ²UU::Map{T, O, AA},\n    beamT::SpectralVector{T}, beamP::SpectralVector{T})\n\nCreate a structure for describing the information needed for a covariance involving this field.\n\nArguments:\n\nname::String: name of this field\nmaskT::Map{T}: temperature mask\nmaskP::Map{T}: polarization mask\nσ²::PolarizedMap{T}: pixel variances\nbeamT::SpectralVector{T}: temperature beam\nbeamP::SpectralVector{T}: polarization beam\n\n\n\n\n\n","category":"type"},{"location":"covariance/#AngularPowerSpectra.CovarianceWorkspace","page":"Covariance","title":"AngularPowerSpectra.CovarianceWorkspace","text":"CovarianceWorkspace(m_i, m_j, m_p, m_q; lmax::Int=0)\n\nInputs and cache for covariance calculations. A covariance matrix relates the masks of four fields and spins. This structure caches various cross-spectra between masks and noise-weighted masks.\n\nArguments:\n\nm_i::CovField{T}: map i\nm_j::CovField{T}: map j\nm_p::CovField{T}: map p\nm_q::CovField{T}: map q\n\nKeywords\n\nlmax::Int=0: maximum multipole to compute covariance matrix\n\n\n\n\n\n","category":"type"},{"location":"covariance/#AngularPowerSpectra.coupledcov","page":"Covariance","title":"AngularPowerSpectra.coupledcov","text":"coupledcov(ch1, ch2, workspace, spectra;\n           noise_ratios=Dict(), lmax=0) where T\n\nArguments:\n\nch1::Symbol: spectrum type of first spectrum (i.e. :TT, :TE, :EE)\nch2::Symbol: spectrum type of second spectrum (i.e. :TT, :TE, :EE)\nworkspace: cache for working with covariances\nspectra: signal spectra\n\nKeywords\n\nnoise_ratios::AbstractDict: ratio of noise spectra to white noise\nlmax=0: maximum multipole moment for covariance matrix\n\nReturns:\n\nSpectralArray{T,2}: covariance matrix (0-indexed)\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = AngularPowerSpectra","category":"page"},{"location":"#AngularPowerSpectra","page":"Home","title":"AngularPowerSpectra","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"AngularPowerSpectra.jl is a package for power spectrum analysis on the sphere. It computes mode-coupling matrices and covariance matrices for TT, TE, and EE spectra, using pseudo-C_ell methods (i.e. Hivon et al. 2002, Efstathiou 2006, Hamimeche and Lewis 2008). It can also compute  beam matrices in the QuickPol formalism (Hivon et al. 2017).","category":"page"},{"location":"","page":"Home","title":"Home","text":"This package makes use of a special array type, which provides an indexing convention. We provide an introduction and some examples here.","category":"page"},{"location":"#Convention:-SpectralArray-and-SpectralVector","page":"Home","title":"Convention: SpectralArray and SpectralVector","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package wraps outputs in a custom SpectralArray (based on OffsetArray), which provides arbitrary indexing but by default makes an array 0-indexed. This is useful for manipulating angular spectra, as although Julia's indices start at 1, multipoles start with the monopole ell = 0. The type SpectralVector is an alias for a one-dimensional SpectralArray, i.e., SpectralArray{T,1}. ","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using AngularPowerSpectra\n\njulia> cl = SpectralVector([1,2,3,4])\n4-element SpectralVector{Int64, Vector{Int64}} with indices 0:3:\n 1\n 2\n 3\n 4\n\njulia> cl[0]\n1","category":"page"},{"location":"","page":"Home","title":"Home","text":"The SpectralArray has special operations defined on it, for the manipulation and application of mode-coupling matrices. For the majority of tasks, you will want to have ell_mathrmmin=0, so it's sufficient to just wrap your array without any other arguments, i.e. SpectralArray(A) or SpectralVector(v). For advanced use, take a look at SpectralArray and SpectralVector.","category":"page"},{"location":"util/#SpectralArray-and-SpectralVector","page":"Utilities","title":"SpectralArray and SpectralVector","text":"","category":"section"},{"location":"util/","page":"Utilities","title":"Utilities","text":"This package wraps outputs in a custom SpectralArray (based on OffsetArray), which provides arbitrary indexing but by default makes an array 0-indexed. This is useful for manipulating angular spectra, as although Julia's indices start at 1, multipoles start with the monopole ell = 0. The type SpectralVector is an alias for a one-dimensional SpectralArray, i.e., SpectralArray{T,1}. ","category":"page"},{"location":"util/","page":"Utilities","title":"Utilities","text":"julia> using AngularPowerSpectra\n\njulia> cl = SpectralVector([1,2,3,4])\n4-element SpectralVector{Int64, Vector{Int64}} with indices 0:3:\n 1\n 2\n 3\n 4\n\njulia> cl[0]\n1","category":"page"},{"location":"util/","page":"Utilities","title":"Utilities","text":"You can also specify arbitrary indices, like OffsetArray. In the next example, we index the rows by the range 0:1 and the columns by 5:8.","category":"page"},{"location":"util/","page":"Utilities","title":"Utilities","text":"julia> A = SpectralArray(ones(2,4), 0:1, 5:8)\n2×4 SpectralArray{Float64, 2, Matrix{Float64}} with indices 0:1×5:8:\n 1.0  1.0  1.0  1.0\n 1.0  1.0  1.0  1.0\n\njulia> A[0, 8]\n1.0","category":"page"},{"location":"util/","page":"Utilities","title":"Utilities","text":"Slicing a SpectralArray makes that sliced dimension become 1-indexed, which loses the index information. For example, slicing a SpectraVector just produces a Vector. If you want to produce a SpectralArray that preserves the indices, you can use IdentityRange from IdentityRanges.jl.","category":"page"},{"location":"util/","page":"Utilities","title":"Utilities","text":"julia> x = SpectralVector(ones(4), 0:3)\n4-element SpectralVector{Float64, Vector{Float64}} with indices 0:3:\n 1.0\n 1.0\n 1.0\n 1.0\n\njulia> x[2:3]\n2-element Vector{Float64}:\n 1.0\n 1.0\n\njulia> using IdentityRanges\n\njulia> x[IdentityRange(2:3)]\n2-element SpectralVector{Float64, Vector{Float64}} with indices 2:3:\n 1.0\n 1.0\n","category":"page"},{"location":"util/","page":"Utilities","title":"Utilities","text":"The one major difference is that matrix multiplication and linear solve operator \\ are specialized for SpectralArray to ignore the monopole and dipole, as pseudo-C_ell methods do not handle those multipoles very well.","category":"page"},{"location":"util/","page":"Utilities","title":"Utilities","text":"You can wrap an array A without copying by just calling SpectralArray(A).","category":"page"},{"location":"beams/","page":"Beams","title":"Beams","text":"CurrentModule = AngularPowerSpectra","category":"page"},{"location":"beams/#QuickPol","page":"Beams","title":"QuickPol","text":"","category":"section"},{"location":"beams/","page":"Beams","title":"Beams","text":"We provide utilities to compute beam matrices in the QuickPol formalism (Hivon et al. 2017). We introduce some additional steps here for computational efficiency. In this section, we use the indices ell ell ell such that we don't need to change indices at the end in order to match Hivon. Define a scaled version of the scan spectrum","category":"page"},{"location":"beams/","page":"Beams","title":"Beams","text":"W_ell^nu_1nu_2s_1s_2j_1j_2 = sum_m^prime=-ell^prime^ell^prime  left(_s_1+nu_1tildeomega^(j_1)_ell^prime m^primeright)\n    left(_s_2+nu_2tildeomega^(j_2)_ell^prime m^primeright)^*","category":"page"},{"location":"beams/","page":"Beams","title":"Beams","text":"Define the matrix,","category":"page"},{"location":"beams/","page":"Beams","title":"Beams","text":"beginaligned\nmathbfXi^nu_1nu_2s_1s_2j_1j_2_ell^primeprimeell = (-1)^s_1 + s_2 + nu_1 + nu_2 sum_ell^prime  rho_j_1nu_1 rho_j_2 nu_2  W_ell^nu_1nu_2s_1s_2j_1j_2  \n qquadqquad times beginpmatrix ell  ell^prime  ell^primeprime \n     -s_1  s_1+nu_1   -nu_1 endpmatrix beginpmatrix\n     ell  ell^prime  ell^primeprime  -s_2  s_2+nu_2   -nu_2 endpmatrix\nendaligned","category":"page"},{"location":"beams/","page":"Beams","title":"Beams","text":"This matrix does not depend on u_1 u_2. We can then write the beam matrix in terms of mathbfXi,","category":"page"},{"location":"beams/","page":"Beams","title":"Beams","text":"mathbfB_ell^primeprimeell^nu_1nu_2 u_1 u_2 = sum_j_1 j_2 s_1 s_2 frac2ell + 14pi _u_1hatb^(j_1)*_ell s_1 _u_2hatb^(j_2)*_ell s_2  frack_u_1 k_u_2k_nu_1 k_nu_2  mathbfXi^nu_1nu_2s_1s_2j_1j_2_ell^primeprimeell","category":"page"},{"location":"beams/","page":"Beams","title":"Beams","text":"With this definition, the beam matrices mathbfB are sub-blocks of the linear operator relating the cross-spectrum to the beamed cross-spectrum (Hivon+17 eq. 38),","category":"page"},{"location":"beams/","page":"Beams","title":"Beams","text":"tildeC^nu_1nu_2_ell^primeprime = sum_u_1u_2left(sum_ell mathbfB_ell^primeprimeell^nu_1nu_2 u_1 u_2 C_ell^u_1 u_2 right)","category":"page"},{"location":"beams/","page":"Beams","title":"Beams","text":"Note that the inner sum is just a matrix-vector multiplication.","category":"page"},{"location":"beams/","page":"Beams","title":"Beams","text":"quickpolΞ!\nquickpolW\nkᵤ","category":"page"},{"location":"beams/#AngularPowerSpectra.quickpolΞ!","page":"Beams","title":"AngularPowerSpectra.quickpolΞ!","text":"quickpolΞ!(𝚵::AA, ν₁, ν₂, s₁, s₂, ω₁, ω₂)\n\nThis computes the Xi_ell^prime primeell matrix. It assumes rho has been absorbed into the omega terms.\n\nω₁: effective scan weights with spin s₁ + ν₁\nω₂: effective scan weights with spin s₂ + ν₂\n\n\n\n\n\n","category":"function"},{"location":"beams/#AngularPowerSpectra.quickpolW","page":"Beams","title":"AngularPowerSpectra.quickpolW","text":"quickpolW(alm₁::Alm{Complex{T}}, alm₂::Alm{Complex{T}})\n\nComputes a scaled spectrum of the scan pattern.\n\nW_ell^nu_1nu_2s_1s_2j_1j_2 = sum_m^prime=-ell^prime^ell^prime\n    left(_s_1+nu_1tildeomega^(j_1)_ell^prime m^primeright)\n    left(_s_2+nu_2tildeomega^(j_2)_ell^prime m^primeright)^*\n\n\n\n\n\n","category":"function"},{"location":"beams/#AngularPowerSpectra.kᵤ","page":"Beams","title":"AngularPowerSpectra.kᵤ","text":"kᵤ([T=Float64], u)\n\nDefined only for u ∈ {-2, 0, 2}.\n\n\n\n\n\n","category":"function"}]
}
