import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'
import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My trips"
        description="Um simples projeto criado para mostrar as minhas viagens já feitas"
        canonical="https://my-trips.neres.com"
        openGraph={{
          locale: 'pt_BR',
          url: 'https://my-trips.neres.com',
          site_name: 'My trips',
          images: [
            {
              url: 'https://my-trips.neres.com/img/icon-512.png',
              width: 800,
              height: 600,
              alt: 'My Trips'
            }
          ]
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
