import Link from "next/link";

export async function getStaticProps() {
    // Mover a importação de noticiasDados para dentro da função
    const noticiasDados = (await import("../dados/noticiasDados")).default;
    const noticias = noticiasDados;

    return {
        props: {
            noticias,
        },
        revalidate: 10,  // Revalida a cada 10 segundos
    };
}

export default function ListaNoticias(props) {
    return (
        <div>
            <h1>Blog de Notícias</h1>
            <ul>
                {
                    (props.noticias).map((noticia) => (
                        <li key={noticia.id}>
                            <Link legacyBehavior href={`/noticias/${noticia.id}`} passHref>
                                <a>{noticia.titulo}</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
