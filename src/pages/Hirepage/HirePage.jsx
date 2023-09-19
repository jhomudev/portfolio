import FormContact from '../../components/FormContact'
import MyNetworks from '../../components/MyNetworks'
import ChooseHire from './components/ChooseHire'

const HirePage = () => {
  return (
    <section className='container-block min-h-screen pt-20 flex flex-col items-center text-center'>
      <div className='max-w-[600px] mx-auto'>
        <h1 className='section-title mb-3'>Hablemos, hagamos</h1>
        <h2 className='section-subtitle'>Hagamos brillar tu marca juntos</h2>
        <p className='text-medium mt-2'>Contáctame por cualquier red social o enviando directamente un correo electrónico completando el formulario más abajo.</p>
      </div>
      <MyNetworks all />
      <br />
      <main className='w-full max-w-[800px] mx-auto  flex flex-col items-center'>
        <ChooseHire />
        <br />
        <br />
        <h2 className='section-subtitle mb-5'>O envíame un email</h2>
        <FormContact />
      </main>
      <br />
    </section>
  )
}
export default HirePage
