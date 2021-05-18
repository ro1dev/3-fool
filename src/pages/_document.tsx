import React from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { GA_TRACKING_ID } from 'lib/gtag'

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
                <Head>
                    {/* Google Analytics */}
                    {GA_TRACKING_ID && (
                        <>
                        <script async={true} src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
                        <script
                            dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_TRACKING_ID}', {
                            page_path: window.location.pathname,
                            });`,
                            }}
                        />
                        </>
                    )}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
