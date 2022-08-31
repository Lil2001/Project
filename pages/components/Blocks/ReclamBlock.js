import Image from 'next/image'

export default function ReclamBlock() {
    return (
        <div style={{width:'100%', marginTop:'90px'}}>
            <Image
                src='/../public/images/reclam.png'
                width='1200px'
                height='250px'
                layout='fixed'
            />
        </div>
    )
}