export class AuthEvents {
  public static readonly TOKEN_EXPIRED = new Event('tokenExpired')
  public static readonly TOKEN_REFRESHED = new Event('tokenRefreshed')
}
