import React, { FC, useState } from 'react'
import { theme } from '../utils/theme'
import { Layout } from '../components/Layout'
import { MuiThemeProvider, Button, TextField } from '@material-ui/core'
import { nabeatsu } from "nabeatsu";

const normalNabeatsuUrl: string = "https://www.geinou-research555.com/wp-content/uploads/2018/09/4bf16c730bca95aa0ca4a6902100d3fb.jpg"
const ahoNabeatsuUrl: string = "https://powerfultrend.c.blog.ss-blog.jp/_images/blog/_d13/powerfultrend/r1.jpg"

const Index: FC = () => {
	const [number, setNumber] = useState<number>(0)
	const [result, setResult] = useState<JSX.Element>()
	const [valid, setValid] = useState<string>('')
	const [isAbleToPressButton, setIsAbleToPressButton] = useState<boolean>(false)

	/**
	 * アホ(3の倍数 or 3のつく数)か、そうでないかの判定
	 * @param n number
	 */
	const isNabeatsu = (n: number): boolean => {
		// 0, 整数判定
		if (!Number.isInteger(Number(n)) || Number(n) == 0) {
			return false
		}
		const isMultipleOfThree: boolean = n % 3 === 0
		const isContainedStringThree: boolean = String(n).indexOf('3') != -1
		return isMultipleOfThree || isContainedStringThree
	}

	/**
	 * ナベアツの通常画像とアホ画像を差し替えて dom を返す関数
	 */
	const aho = (): void => {
		const url: string = isNabeatsu(number) ? ahoNabeatsuUrl : normalNabeatsuUrl
		const ahoString = nabeatsu(number)
		const dom: JSX.Element = (
			<div style={{padding: '10%'}}>
				<div style={{margin: '10px'}}>
					<a
						href={`https://twitter.com/intent/tweet?text=${ahoString}&url=https://3-fool.vercel.app`}
						style={{border: 'none', padding: '15px', color: 'white', backgroundColor: '#4169e1', textDecoration: 'none', borderRadius: '25px', boxShadow: "0 1px 3px rgb(0 0 0 / 15%)", outline: 'none'}}
					>
						ツイートする
					</a>
				</div>
				<h2 style={{margin: '40px'}}>{ahoString}</h2>
				<img src={url} alt="nabeatsu" style={{height: '50vh'}}/>
			</div>
		)
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
								if (isNaN(Number(e.target.value)) || (e.target.value === '')) {
									setIsAbleToPressButton(false)
									setValid("半角数字を入力してください")
								} else {
									setIsAbleToPressButton(true)
									setValid('')
									setNumber(e.target.value)
								}
							}}
						/>
						<Button
							onClick={aho}
							disabled={!isAbleToPressButton}
						>
							run
						</Button>
					</div>
					<small>{valid}</small>
					{result}
				</div>
			</Layout>
		</MuiThemeProvider>
	)
}

export default Index
