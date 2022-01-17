import { NextPageContext } from 'next'
import Head from 'next/head'

type Redirect = {
  redirect: {
    destination: string
    permanent?: boolean
  }
}

export default function Home() {
  return <h1>Homepage</h1>
}

export const getServerSideProps = (): Redirect => {
  return {
    redirect: {
      destination: '/login',
      permanent: true,
    },
  }
}
