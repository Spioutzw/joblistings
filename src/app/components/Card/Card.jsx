import Image from 'next/image'
import React, { useEffect } from 'react'

function Card(info) {

    useEffect(() => {
        console.log(info)
    }, [info])
    return (
        <div>
            <div>
                <Image src={info.logo} alt="logo" width={50} height={50} />
                <div>
                    <p>{info.compagny}</p>
                    {info.new && <p>New!</p>}
                    {info.featured && <p>Featured</p>}
                </div>
                <p>{info.position}</p>
                <div>
                    {info.languages.map((language, index) => {
                        return <p key={index}>{language}</p>
                        })}
                    {info.tools.map((tool, index) => {
                        return <p key={index}>{tool}</p>
                        })
                    }
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Card