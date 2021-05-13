import HomeTemplate from 'templates/Home'
import { MapProps } from 'components/Map'
import { GetStaticProps } from 'next'
import client from 'graphql/client'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import { GET_PLACES } from 'graphql/queries'

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  if (!places) return { notFound: true }

  return {
    revalidate: 5,
    props: {
      places
    }
  }
}
