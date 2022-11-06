export default function Home(props) {
  return (
    <div>
      <h1>Count: {props.count}</h1>
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()

  console.log(data)

  return {
    props: {
      count: data.count,
    },
  }
}
