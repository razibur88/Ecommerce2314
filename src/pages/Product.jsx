import React, { useContext } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { apiData } from '../components/ContextApi'

const Product = () => {
    let data = useContext(apiData)

    console.log(data);

  return (
    <section>
        <Container>
            <Flex>
                <div className="w-[20%]">
                    cateGory
                </div>
                <div className="w-[80%]">
                    Product
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Product