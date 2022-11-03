import PageContainer from '../layouts/PageContainer'
import Nav from '../layouts/Nav'
import List from '../layouts/List'
import Footer from '../layouts/Footer'

const ListPage = () => {
  return (
    <PageContainer>
      <Nav />
      <List />
      <Footer isActive={'ventas'} />
    </PageContainer>
  )
}
export default ListPage
