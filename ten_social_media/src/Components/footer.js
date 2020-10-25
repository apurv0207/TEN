import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'
export function FooterContainer()
{
    return
    {
        <Footer>
            <Footer.Wrapper>
               <Footer.Row>
                  <Footer.Column>
                      <Footer.Title> About us </Footer.Title>
                <Footer.Link href="#">TEN</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                      <Footer.Title> Want to be a part! </Footer.Title>
                <Footer.Link href="#">Sign in</Footer.Link>
                <Footer.Link href="#">Sign up</Footer.Link>
                </Footer.Column>
    
                <Footer.Column>
                    <Footer.Title href ="#"> Contact us </Footer.Title>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title> social </Footer.Title>
                <Footer.Link href="#"><Icon className="fab fa-facebbok-f"/>Facebook</Footer.Link>
                <Footer.Link href="#"><Icon className="fab fa-instagram"/>Instagram</Footer.Link>
                <Footer.Link href="#"><Icon className="fab fa-twitter"/>Twitter</Footer.Link>
               
                </Footer.Column>

                </Footer.Row>
             </Footer.Wrapper>
        </Footer>
    }
}