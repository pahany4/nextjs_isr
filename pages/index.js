import Link from "next/link";

export default function Home({analyses}) {

  return (
    <>
      <main style={{padding: "50px"}}>
        <ul>
          {analyses.results.map(analysis => (
            <li style={{marginBottom: "5px"}} key={analysis.id}>
              <Link
                href={`/analyses/${analysis.id}`}
              >{analysis.title}</Link>
            </li>
          ))}
        </ul>
      </main>

    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:8000/analysis/`)
  const analyses = await res.json()

  return {
    props: {analyses},
    revalidate: 30,
  }
}