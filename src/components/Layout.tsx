import React, { ReactNode } from 'react'
import Head from 'next/head'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Footer, Root } from '../utils'
import { url } from '../utils/url'

type Props = {
	children?: ReactNode
	title?: string
}

export const Layout = ({ children, title = 'nabeatsu' }: Props) => (
	<Root>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<meta name="description" content="3がつく数字か3の倍数でアホになります" />
			<style>{`body { margin: 0 } /* custom! */`}</style>
			<style>
				{`.MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-colorInherit { padding: 20px !important; } /* custom! */`}
				{`.MuiToolbar-root.MuiToolbar-regular.MuiToolbar-gutters { padding: 0 !important; } /* custom! */`}
				{/* ↓ボタン押せない時 */}
				{`.MuiButton-root.Mui-disabled { background-color: #95a7db !important; }`}
				{/* ↓ボタン押せる時 */}
				{`.MuiButton-root { color: white !important; background-color: #4169e1 !important; }`}
				{/* font */}
				{`#__next { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; }`}
			</style>
		</Head>

		{/* ヘッダー */}
		<AppBar position="static" color="secondary">
			<Toolbar>
				<FadeMenu />
			</Toolbar>
		</AppBar>
		<div style={{textAlign: "center", height: '85%'}}>
			{children}
		</div>
		{/* フッター */}
		<Footer>
			<hr />
			&copy; nabeatsu
		</Footer>
	</Root>
)

const FadeMenu = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<div>
			<Button onClick={handleClick} color="inherit">
				<MenuIcon color="inherit" />
			</Button>
			<SwipeableDrawer open={open} onClose={handleClose} onOpen={() => open}>
				<ListIcon />
			</SwipeableDrawer>
		</div>
	)
}

const ListIcon = () => (
	<>
		<List>
			<ListItem button>
				<ListItemText>
					<a href={url}>トップ</a>
				</ListItemText>
			</ListItem>
			<Divider />
			<ListItem button>
				<a href={`${url}/about`}>当サイトについて</a>
			</ListItem>
		</List>
	</>
)
