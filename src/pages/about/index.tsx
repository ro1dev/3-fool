import React, { FC } from 'react'
import { theme } from '../../utils/theme'
import { MuiThemeProvider } from '@material-ui/core'
import { Layout } from '../../components/Layout'

const Index: FC = () => {
	return (
		<MuiThemeProvider theme={theme}>
			<Layout title="nabeatsu">
				<h1>当サイトについて</h1>
				ただのジョークサイトです。
				<div>ソースは<a href="https://github.com/rrih/nabeatsu">こちら</a></div>
				<div>何かあれば<a href="https://github.com/rrih/nabeatsu/issues/new">こちら</a></div>
			</Layout>
		</MuiThemeProvider>
	)
}

export default Index
