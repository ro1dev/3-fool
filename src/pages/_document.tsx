import React from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        ctx.renderPage = (): ReturnType<DocumentContext['renderPage']> =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

        const initialProps = await Document.getInitialProps(ctx)

        return {
            ...initialProps,
            styles: [
                ...React.Children.toArray(initialProps.styles),
                sheet.getStyleElement()
            ],
        }
    }

    render(): JSX.Element {
        return (
            <Html lang='ja'>
                <Head></Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
