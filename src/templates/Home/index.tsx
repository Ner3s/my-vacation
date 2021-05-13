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
        title="My vacation"
        description="Um simples projeto criado para mostrar as minhas viagens já feitas"
        canonical="https://my-vacation.neres.com"
        openGraph={{
          locale: 'pt_BR',
          url: 'https://my-vacation.neres.com',
          site_name: 'My vacation',
          images: [
            {
              url: 'https://my-vacation.neres.com/img/icon-512.png',
              width: 800,
              height: 600,
              alt: 'My vacation'
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
