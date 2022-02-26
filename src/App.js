import {AspectRatio, Box, Flex, HStack, Image, Stack, Text} from "@chakra-ui/react";

function App() {
  return (
    <Box position={"fixed"} left={0} top={0} h={'100vh'} w={'100vw'} bg={'rgba(0,0,0,.2)'} onClick={handleModalClicked}>
      <Box
        onClick={(e) => e.stopPropagation()}
        overflowY={"auto"}
        position={'absolute'}
        top={0}
        right={0}
        bottom={0}
        w={'500px'}
        bg={'#ffffff'}
        p={'30px'}
      >
        <Title>概述</Title>
        <Flex justifyContent={"space-between"} mb={'40px'}>
          <Field label={'本页商品总数量'} value={120}/>
          <Field label={'本页商品中最高价格'} value={120}/>
          <Field label={'本业商品中最低价格'} value={120}/>
        </Flex>
        <Title>详情</Title>
        <ProductInfo
          label={'本页产品中价格最高的产品'}
        />
        <ProductInfo
          label={'本页产品中价格最低的产品'}
        />
      </Box>
    </Box>
  );
}

function Field(props) {
  const {label = '-', value = '-'} = props;
  return (
    <Stack>
      <Text mb={'0px'} color={'#CECECE'} fontSize={'12px'}>{label}</Text>
      <Text my={'0px'} fontSize={'16px'} fontWeight={'bold'}>{value}</Text>
    </Stack>
  )
}

function Title(props) {
  return (
    <Text m={0} fontSize={'26px'} fontWeight={'bold'}>{props.children}</Text>
  )
}

function ProductInfo(props) {
  const {
    label,
    title = '-',
    price = '-',
    src
  } = props;
  return (
    <Box>
      <Text>{label}</Text>
      <Flex border={'1px solid #232323'}>
        <AspectRatio w={'150px'} ratio={0.6}>
          <Image src={src} w={'100%'} h={'100%'} fit={'cover'} />
        </AspectRatio>
        <Box px={'20px'}>
          <Text>{title}</Text>
          <HStack>
            <Text>Price(USD)</Text>
            <Text>${price}</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  )
}

function handleModalClicked() {
  console.log('clicked modal')
}
export default App;
