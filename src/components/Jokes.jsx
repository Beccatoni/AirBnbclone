

const Jokes = ({setup, punchline}) => {
  return (
    <section>
    <div className='mt-7'>
        
        {setup && <h3 className='font-semibold' >Setup: {setup}</h3>}
        <h4>Punchline: {punchline}</h4>
        <hr />
    </div>
    </section>
  )
}

export default Jokes