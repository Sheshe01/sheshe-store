import React from 'react'
import Image from 'next/image'
import Text from 'components/common/Text'
import * as Styled from './styles'
import { rgbDataURL } from 'utils/helpers'

const InstitucionalPage: React.FC = () => {
  return (
    <Styled.ContactContainer>
      <Styled.ContainerImage>
        <Image
          alt="Mountains"
          src="/images/institutional.png"
          width={392}
          height={369}
          layout="responsive"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={rgbDataURL(135, 104, 55)}
          quality={100}
          priority
        />
      </Styled.ContainerImage>
      <Styled.TextContainer>
        <Text heading={100}>
          A Sheshe é uma plataforma de e-commerce de moda africana e geradora de
          conteúdos que valoriza e mostra ao mundo as raízes, saberes,
          tradições, histórias, sentidos sensoriais e a grandiosidade do
          continente africano.
        </Text>
        <Text heading={100}>
          Fomentar iniciativas culturais, criar conteúdos educacionais e
          conhecimento sobre África para assim mudar a narrativa sobre o
          continente e quebrar os estereótipos existentes.
        </Text>
        <Text heading={100}>
          Propagar a diversidade cultural e a arte de estilistas, designers,
          costureiras, artesãos, ilustradores, artistas e criadores que
          trabalham com a cultura africana é um dos propósitos da Sheshe.
        </Text>
        <Text heading={100} weight="bold">
          Um novo tempo,
        </Text>
        <Text heading={100} weight="bold">
          Um novo caminho,
        </Text>
        <Text heading={100} weight="bold">
          Uma nova história.
        </Text>
        <Text heading={100}>
          A Sheshe vive um momento de crescimento e expansão para o mercado
          internacional.
        </Text>
        <Text heading={100}>
          Temos um novo site. Melhor ainda, uma nova plataforma com muito mais
          tecnologia, inovação e uma nova forma de consumo mais consciente e
          centrado nas pessoas.
        </Text>
        <Text heading={100}>
          Com ações de impacto positivo através da moda, novas inspirações de
          estilo de vida e uma moda com propósito, feita de um jeito diferente.
        </Text>
        <Text heading={100}>
          Um novo tempo para edificar ainda mais a nossa essência que é a de
          celebrar a <b>Alma de África</b> com todas suas nuances, cores, sons,
          aromas e diversidade cultural.
        </Text>
        <Text heading={100}>
          Um caminho que queremos construir junto com vocês e para vocês:
          clientes, fornecedores, parceiros, amigos, colaboradores e apoiadores.
        </Text>
      </Styled.TextContainer>
    </Styled.ContactContainer>
  )
}

export default InstitucionalPage
