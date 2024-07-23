
import mail from '../assets/mail.png'
import phone1 from '../assets/phone.png'
// import four from '../assets/four.webp'

const Contact = ({img, name, phone, email}) => {
    

  return (
    <div >
         <div className="rounded-md p-3 shadow-md flex flex-col w-[16rem]  items-start">
                <img src={img} className='h-[13rem] w-[15rem]'/>
                <h3 className='font-bold'>{name}</h3>
                <div className="flex gap-2 ">
                    <img src={phone1} className='h-5 w-5' />
                    <p>{phone}</p>
                </div>
                <div className="flex gap-2">
                    <img src={mail} className='h-5 w-5' />
                    <p>{email}</p>
                </div>
            </div>
    </div>
  )
}

export default Contact