const Analysis = ({analysis}) => {

  return (
    <div style={{padding: "50px"}}>
      <p>{analysis?.title}</p>
      <p>{analysis?.price}</p>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:8000/analysis/`)
  const analyses = await res.json()

  return {
    paths: analyses.results.map(analysis => ({
      params: {id: analysis.id.toString()}
    })),
    fallback: 'blocking',
  }
}

export async function getStaticProps({params}) {

  const res = await fetch(`http://localhost:8000/analysis/${params.id}`)
  let analysis = null
  if (res.status === 200) {
    analysis = await res.json()
  } else {
    return {
      redirect: {
        destination: "/404.html",
      },
    }
  }
  return {
    props: {analysis},
    revalidate: 30,
  }
}

export default Analysis