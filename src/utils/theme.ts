import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#ffff8b',
			main: '#4169e1',
			dark: '#c9bc1f',
			contrastText: '#000000'
		},
		secondary: {
			light: '#428e92',
			main: '#4169e1',
			dark: '#00363a',
			contrastText: '#ffffff'
		}
	}
})
