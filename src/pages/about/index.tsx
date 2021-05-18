import React, { FC } from 'react'
import { theme } from '../../utils/theme'
import { MuiThemeProvider } from '@material-ui/core'
import { Layout } from '../../components/Layout'

const Index: FC = () => {
	return (
		<MuiThemeProvider theme={theme}>
			<Layout title="nabeatsu">
				<h1>当サイトについて</h1>
				<p>ただのジョークサイトです。</p>
				<p><a href="https://twitter.com/3_aho_bot">数え続ける世界のナベアツbot</a>に影響を受けました。</p>
			</Layout>
		</MuiThemeProvider>
	)
}

export default Index
