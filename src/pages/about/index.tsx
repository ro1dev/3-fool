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
				<div><a href="https://github.com/rrih/nabeatsu">ソースコード</a></div>
				<div>何かあれば<a href="https://twitter.com/rrih_dev">@rrih_dev</a>まで</div>
			</Layout>
		</MuiThemeProvider>
	)
}

export default Index
