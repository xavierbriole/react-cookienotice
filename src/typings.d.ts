type CookieOptions = {
  name: string
  value: string
  expires: number
  secure: boolean
  httpOnly: boolean
  sameSite: 'strict' | 'lax' | 'none'
}

type ServiceObject = {
  name: string
  description: string
  code: string
  alwaysActive?: boolean
}

type PlacementOptions = {
  vertical: 'top' | 'bottom'
  horizontal: 'left' | 'right'
}
