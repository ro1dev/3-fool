import React, { FC } from 'react'
import { theme } from '../../utils/theme'
import { MuiThemeProvider } from '@material-ui/core'
import { Layout } from '../../components/Layout'

const Index: FC = () => {
	return (
		<MuiThemeProvider theme={theme}>
			<Layout title="nabeatsu">
				<h1>当サイトについて</h1>
				ただのジョークサイトです。<a href="https://twitter.com/3_aho_bot">数え続ける世界のナベアツbot</a>に影響を受けました。
				<div>ソースは<a href="https://github.com/rrih/nabeatsu">こちら</a></div>
				<div>何かあれば<a href="https://github.com/rrih/nabeatsu/issues/new">こちら</a></div>
			</Layout>
		</MuiThemeProvider>
	)
}

export default Index
