import { theme } from "../../../theme"

export const getColor = (color, type = 'main') => theme.palette[color][type]