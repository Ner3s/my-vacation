import { NextSeo } from 'next-seo'

import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import { useRouter } from 'next/dist/client/router'

import Image from 'next/image'

import * as S from './styles'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlacesTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
      text: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - My vacation`}
        description={place.description?.text}
        canonical="https://my-vacation.neres.com"
        openGraph={{
          locale: 'pt_BR',
          url: 'https://my-vacation.neres.com',
          site_name: 'My vacation',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />

      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Heading>{place.name}</S.Heading>
          <S.Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          ></S.Body>
          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
                objectFit={'cover'}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </>
  )
}
