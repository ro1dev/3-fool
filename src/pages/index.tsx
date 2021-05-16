import React, { FC, useState } from 'react'
import { theme } from '../utils/theme'
import { Layout } from '../components/Layout'
import { MuiThemeProvider, Button, TextField } from '@material-ui/core'
import styled from "styled-components";

const normalNabeatsuUrl: string = "https://www.geinou-research555.com/wp-content/uploads/2018/09/4bf16c730bca95aa0ca4a6902100d3fb.jpg"
const ahoNabeatsuUrl: string = "https://powerfultrend.c.blog.ss-blog.jp/_images/blog/_d13/powerfultrend/r1.jpg"

const Index: FC = () => {
	const [number, setNumber] = useState<number>('')
	const [result, setResult] = useState<JSX.Element>()
	const [valid, setValid] = useState<string>('')
	const [isAbleToPressButton, setIsAbleToPressButton] = useState<boolean>(false)

	const isNabeatsu = (n: number): boolean => {
		// 0, 整数判定
		if (!Number.isInteger(Number(n)) || Number(n) == 0) {
			return false
		}
		const isMultipleOfThree: boolean = n % 3 === 0
		const isContainedStringThree: boolean = String(n).indexOf('3') != -1
		return isMultipleOfThree || isContainedStringThree
	}

	const aho = () => {
		const url: string = isNabeatsu(number) ? ahoNabeatsuUrl : normalNabeatsuUrl
		const dom: JSX.Element = <div style={{padding: '10%'}}><img src={url} alt="nabeatsu" style={{height: '50vh'}}/></div>
		setResult(dom)
	}

	return (
		<MuiThemeProvider theme={theme}>
			<Layout title="nabeatsu">
				<h1>nabeatsu</h1>
				<div>3がつく数字か3の倍数でアホになります</div>
				<div>
					<div>
						<TextField
							type="text"
							onChange={(e: any) => {
								if (isNaN(Number(e.target.value))) {
									setIsAbleToPressButton(false)
									setValid("半角数字を入力してください")
								} else {
									setIsAbleToPressButton(true)
									setValid('')
									setNumber(e.target.value)
								}
							}}
						/>
						<StyledButton
							onClick={aho}
							// style={{
							// 	backgroundColor: '#4169e1',
							// 	color: 'white',
							// }}
							disabled={!isAbleToPressButton}
						>
							run
						</StyledButton>
					</div>
						<small>{valid}</small>
					{result}
				</div>
			</Layout>
		</MuiThemeProvider>
	)
}

export default Index

const StyledButton = styled(Button)`
	// 押せない時
	.MuiButton-root.Mui-disabled {
		background-color: red !important;
	}
`