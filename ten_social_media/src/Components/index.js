import React from 'react'
import {Container,Wrapper,Row,Column,Link,Title} from './styles/footer'
export default function({children,...restProps})
{
    return<Container {...restProps}>{children}</Container>
}
Footer.wrapper = function FooterWrapper({children,...restProps})
{
    return<Wrapper {...restProps}></Wrapper>
}
Footer.Row= function FooterRow({children,...restProps})
{
    return<Row {...restProps}></Row>
}
Footer.Column = function FooterColumn({children,...restProps})
{
    return<Column {...restProps}></Column>
}
Footer.Link = function FooterLink({children,...restProps})
{
    return<Link {...restProps}></Link>
}
Footer.Title = function FooterTitle({children,...restProps})
{
    return<Title {...restProps}></Title>
}