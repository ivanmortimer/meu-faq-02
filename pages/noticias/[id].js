// /pages/noticias/[id].js

import noticiasDados from "../../dados/noticiasDados";

export default function Noticias({ noticias }) {
    if (!noticias) {
        return <p>Notícia não encontrada</p>;
    }
    return (
        <div>
            <h1>{noticias.titulo}</h1>
            <p>{noticias.conteudo}</p>
        </div>
    );
}

export async function getStaticPaths() {
    const paths = noticiasDados.map((noticia) => ({
        params: { id: noticia.id },
    }));

    return {
        paths: paths,
        fallback: 'blocking',
    };
}

export async function getStaticProps({ params }) {
    const noticias = noticiasDados.find((noticia) => noticia.id === params.id);

    return {
        props: {
            noticias,
        },
        revalidate: 10,
    };
}
