import { Input } from '@nextui-org/react'
import { jobPositions } from '../../../utils/contants'
import CardJob from './CardJob'
import useHireContext from '../hooks/useHireContext'

const ChooseHire = () => {
  const { setContact, contact, errorEmptyContact } = useHireContext()

  const handleChangeContact = (e) => setContact(e.target.value)

  const handleClearContact = () => setContact('')

  return (
    <>
      <h2 className='section-subtitle'>Puestos que más me interesan:</h2>
      <br />
      <Input
        onChange={handleChangeContact}
        onClear={handleClearContact}
        isClearable
        value={contact}
        className='w-[min(100%,300px)]'
        inputMode='email'
        placeholder='Dejame tu correo o numero telefónico'
        label='Contacto'
        color={`${errorEmptyContact ? 'danger' : 'default'}`}
      />
      <br />
      <div className='w-full flex flex-wrap items-center justify-center gap-5'>
        {
            jobPositions.map(job => (
              <CardJob
                key={job.titleJob}
                jobTitle={job.titleJob}
                types={job.types}
                modes={job.modes}
              />

            ))
          }
      </div>
    </>
  )
}
export default ChooseHire
