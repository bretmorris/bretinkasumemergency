import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';

export default function Home() {
  return (
    <>
      <Head>
        <title>#bretinkasumemergency</title>
        <meta name="description" content="Birthday drinks for Bret Morris and Ben Kasum Saturday Feb. 4th 9PM | @ The Surly Goat, Hollywood" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="#bretinkasumemergency" />
        <meta property="og:description" content="Birthday drinks for Bret Morris and Ben Kasum Saturday Feb. 4th 9PM | @ The Surly Goat, Hollywood" />
        <meta property="og:image" content="/poster.jpg" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMain>
        <StyledImage width={1184} height={1584} src="/poster.jpg" alt="BretInKasumEmergency" />
      </StyledMain>      
    </>
  )
}

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align: center;
`

const StyledImage = styled(Image)`
  width: 592px;
  height: auto;
  max-width: 100%;
`