import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCol, MDBRow, MDBContainer } from "mdbreact";
import {
  Container,
  Grid,
  Header,
  Image,
  List,
  Divider,
  Segment,
  Icon, 
  Card
} from 'semantic-ui-react'

const StandardsList = (props) => {
   
    return (
        <div className="bg3">
        <div>
        {/* <span className="classheader"> Common Core Standards</span>   */}
          {/* <span className="classheader"></span> */}
          <header className="listhead"><i class="fas fa-graduation-cap"></i> Common Core Standards</header> 
        <div><br></br>
  <MDBContainer >
  <MDBRow className="mb-4">
    <MDBCol sm="6">
      <MDBCard className="slistcard">
        <MDBCardBody>
          <MDBCardTitle className="listcard">Operations & Algebraic Thinking</MDBCardTitle>
          <Image className="LOimage2" src='https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/vprojectold1-aum-639_2.jpg?auto=format&bg=F4F4F3&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-1.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1200&s=298f965c6d104292c9ff87a19462a28a' width="250"  />
          <MDBCardText className="listtext">
          <NavLink to="/standardscontainer"><i class="fas fa-angle-double-right"></i>  <strong>4.OA.A.1</strong> - Interpret a multiplication equation as a comparison.</NavLink><br></br>
          <NavLink to="/oaa2"><i class="fas fa-angle-double-right"></i>  <strong>4.OA.A.2</strong> - Multiply or divide to solve word problems involving multiplicative comparison.</NavLink><br></br>
          <NavLink to="/oaa3"><i class="fas fa-angle-double-right"></i>  <strong>4.OA.A.3</strong> - Solve multistep word problems posed with whole numbers and having whole-number answers using the four operations.</NavLink><br></br>
          <NavLink to="/OAB4"><i class="fas fa-angle-double-right"></i>  <strong>4.OA.B.4</strong> - Find all factor pairs for a whole number in the range 1-100.</NavLink><br></br>
          <NavLink to="/OAC5"><i class="fas fa-angle-double-right"></i>  <strong>4.OA.C.5</strong> - Generate a number or shape pattern that follows a given rule.</NavLink>
          </MDBCardText>
          {/* <MDBBtn color="primary">go somewhere</MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    <MDBCol sm="6">
      <MDBCard className="slistcard">
        <MDBCardBody>
          <MDBCardTitle className="listcard">Number & Operations in Base Ten</MDBCardTitle>
          <Image className="LOimage2" src='https://image.winudf.com/v2/image/Y29tLmdtYWlsLmNyb25pc2UuZGFuaWVsLkJhc2VUZW5faWNvbl9yNzRvbjNzaw/icon.png?w=170&fakeurl=1' width="250"  />
          <MDBCardText className="listtext">
          <NavLink to="/nbta1"><i class="fas fa-angle-double-right"></i>  <strong>4.NBT.A.1</strong> - Recognize that in a whole number, a digit in one place represents ten times what it represents to its right.</NavLink><br></br>
          <NavLink to="/nbta2"><i class="fas fa-angle-double-right"></i>  <strong>4.NBT.A.2</strong> - Read and write multi-digit whole numbers using base-ten numerals, number names, and expanded form.</NavLink><br></br>
          <NavLink to="/nbta3"><i class="fas fa-angle-double-right"></i>  <strong>4.NBT.A.3</strong> - Use place value understanding to round multi-digit whole numbers to any place.</NavLink><br></br>
          <NavLink to="/nbtb4"><i class="fas fa-angle-double-right"></i>  <strong>4.NBT.B.4</strong> - Fluently add and subtract multi-digit whole numbers using the standard algorithm.</NavLink><br></br>
          <NavLink to="/nbtc5"><i class="fas fa-angle-double-right"></i>  <strong>4.NBT.C.5</strong> - Multiply a whole number of up to four digits by a one-digit whole number.</NavLink>
          </MDBCardText>
          {/* <MDBBtn color="primary">go somewhere</MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>

  <MDBRow className="mb-4">
    <MDBCol sm="6">
      <MDBCard className="slistcard">
        <MDBCardBody>
          <MDBCardTitle className="listcard">Number & Operations - Fractions</MDBCardTitle>
          <Image className="LOimage2" src='https://www.k12blueprint.com/sites/default/files/styles/medium/public/fractions-icon.png?itok=WZ9nuZF_' width="250"  />
          <MDBCardText className="listtext">
          <NavLink to="/nf1"><i class="fas fa-angle-double-right"></i>  <strong>4.NF.A.1</strong> - Explain why a fraction a/b is equivalent to a fraction by using visual fraction models.</NavLink><br></br>
          <NavLink to="/nf2"><i class="fas fa-angle-double-right"></i>  <strong>4.NF.A.2</strong> - Compare two fractions with different numerators and different denominators.</NavLink><br></br>
          <NavLink to="/nf3"><i class="fas fa-angle-double-right"></i>  <strong>4.NF.B.3</strong> - Understand a fraction a/b with a > 1 as a sum of fractions 1/b.</NavLink><br></br>
          <NavLink to="/nf4"><i class="fas fa-angle-double-right"></i>  <strong>4.NF.B.4</strong> - Apply and extend previous understandings of multiplication to multiply a fraction by a whole number.</NavLink><br></br>
          <NavLink to="/nf5"><i class="fas fa-angle-double-right"></i>  <strong>4.NF.C.5</strong> - Express a fraction with denominator 10 as an equivalent fraction with denominator 100.</NavLink>
          </MDBCardText>
          {/* <MDBBtn color="primary">go somewhere</MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>

    <MDBCol sm="6">
      <MDBCard className="slistcard">
        <MDBCardBody>
          <MDBCardTitle className="listcard">Measurement & Data</MDBCardTitle>
          <Image className="LOimage2" src='https://static.vecteezy.com/system/resources/previews/000/351/982/non_2x/vector-pencil-ruler-icon.jpg' width="250"  />
          <MDBCardText className="listtext">
          <NavLink to="/md1"><i class="fas fa-angle-double-right"></i>  <strong>4.MD.A.1</strong> - Know relative sizes of measurement units within one system of units.</NavLink><br></br>
          <NavLink to="/md2"><i class="fas fa-angle-double-right"></i>  <strong>4.MD.A.2</strong> - Use the four operations to solve word problems involving distances, intervals of time, liquid volumes, masses of objects, and money.</NavLink><br></br>
          <NavLink to="/md3"><i class="fas fa-angle-double-right"></i>  <strong>4.MD.A.3</strong> - Apply the area and perimeter formulas for rectangles in real world and mathematical problems.</NavLink><br></br>
          <NavLink to="/md4"><i class="fas fa-angle-double-right"></i>  <strong>4.MD.B.4</strong> - Make a line plot to display a data set of measurements in fractions of a unit (1/2, 1/4, 1/8).</NavLink><br></br>
          <NavLink to="/md5"><i class="fas fa-angle-double-right"></i>  <strong>4.MD.C.5</strong> - Recognize angles as geometric shapes that are formed wherever two rays share a common endpoint, and understand concepts of angle measurement.</NavLink>
          </MDBCardText>
          {/* <MDBBtn color="primary">go somewhere</MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
  <MDBRow className="mb-4">
    <MDBCol sm="6">
      <MDBCard className="slistcard">
        <MDBCardBody>
          <MDBCardTitle className="listcard">Geometry</MDBCardTitle>
          <Image className="LOimage2" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA9lBMVEX/////xhIAAADyogP/yRL/yxL+xBH/zRPyowT4pgP/zBP/zxNISEheXl78qQP1pAO1tbVQPgZhQQFERERaPAFAQEBaWlrcqw/lshBNTU1SQAaxsbFKOQXt7e3Hx8ftuBF8UwHKnQ68kg1lTwfUpQ+viAzn5+d0WgjelQP29vbW1tacnJx9fX2QkJCFhYX2vxGRcAqjfwvRjAMVEAE4ODguLi5ubm7EmA7KysqHaQkkGADChASmpqbb29sbGxs1KQQYEwFfSQY9MASocAJMMwAtHgBtSQESEhIhGQJ9YQknJycxJgObeAtFLQCwdQKEWAGXZAE4JQCJY7thAAAPrklEQVR4nN2daXfTOhCG49SKiQ1p4QLdG5ImdE3T3kJDgQINy21py/L//8yNHY0WL7FGsmM77yfOoV6ejKQZSaNxrZanDrYPd1Y2jwYnJ8e+Tk4GH1d23l0d5PrQOelqZXDx4lM9SW/Xj4/ebRf9krq6+njxMxFN1vpgp2qYh4PHinBMny42q0K5vfkESwd6e/Ku6LdP1fbHf3TxqI53imaYoYOPLwzxprooqSV3khrn+efry/v+qNdbW2sPLdIYttdWe51u/3Rv633CJf8NXheNE9bB0X9xb3q3d9ZpW57jEmL7sgIF/ySEuB4ZrnVPr2MhX5bKkFfH0Te82T3rWZ5LKFWSJqSO1+5ebkXv8HOzaC7Q4cvIy22crdpOGpyI6TrD0eVN5D5HRbP5OlwPv9beyPLU6Tim662djcM3GxQd2l2F+W47loOn47Zs98PttVA7bl+EGmfXAA8gvbXTc/m2K4UBDuQXOW07xAyPQrpktCHd+c1hIXw7kn/43rdcQ/OJkN7qrcR4Mbs7HuTgPrcl/z7uZGM+gdEZnkqMs1yH76yyDvY+ynxuxnyBQoyPE+30Mvveui3OjT53vOyapyzXkhg/xr8NDOcZIu6Ij+1ruD51Oe094Vkv43ojjzcyQxRdxL2dR/sUNBlzRAcZ7W1iQJUN4mth1WWj7eTLFzA6fQHiZAZgNogrwv26uXVAWWQoNNXHUksNh8TmiCf8ZnuNnBuoIK8jUAjuPxrzmyIKUWjXmxvfRKSxG0PBAK9Xs0Hcfsvu83Q4PwNO5Qm9cRAC3CBuJohX/BH3pgG2htz2HXv+hQT4dPJrkwwQ33HA3lxbKMgmfMBZlyzo/685Infzn9vzbqEgoaWuP5EBzRG5l9jLNYiZLYdThAFNETfZxadzcPLJIu3QYs6G8HObIHLAfiFdkMtuSKscG1KH0UfkTbRTqAV92UTwjBuhDqOLyAeZnlsMliSXDakbkSFPD5G7idWiBlFZ3m0SoB7ia3bJWjkAJ4iX/utsxb4OHnG7fIATxNH1xllCj0Ejsli0JE10KuIkL30hEdlsolcmwNlCIbL5YKcMo6iqEIjMT/QL94MoKSOyYfSy4EgGLVVEyIfZrZYFfdn/qiDCsuFdcZMJXTUeNRUQWSdsV46w8WhpKR3xgA2j1fETVD6gAiJ4wtOqjTKWFQCmIsLu0laVHGGgBgWUEK+S22imndAWsmryEgcUEcO7AbUaLPR0MzGhbRPX8+x2e22idrvheQ7JablHBFxaaj2nHMdJ4+iueSe0iWOtje73tr6wJlM//7x7Olq1ECk3qpIBmwAY7YiwRz80fKDteqtn8WldE23c90jG2+MJgOthQMiy6Bo93naszm0CHNPeaGiwgG67DTFBIsmCEUAYZrZMojXirV6m4VHInqf5S7q9rfq4w3pSEuDjyDAD4ZrBOErIaKzG5+umb+mMaHYvuBpWOJUtyKYU+ou/hPS/xJHM0H0Dz+jSHk4RlS3I9jx0+WzSjeN7u35xMjg6Ojl+sv4mjvEMnRPgfq5zRHUL1g7hMs3O4ayOwy//8mgnlA2zvXMUySk+HyG3zfnKad9T74PMhHd6gKQRGl/eDBKz0l5vhrapr4eopmq32ZX9lrIF2Uao3pTC6Umv/CktYftgRT6ZgdsXIWvswq8tVQtCvPZZJ5qxXSmJSS1X+/WJeM2uhWmpsYizLcgG0o6GpyDDsfCux+oJg0fCZeeolecYxBTAGk1KH2v4J1fcv3yCS4gUc1U7mOYTQUxporUa/d8Rvhd6Xf6Sb9E5rwfC0HqPQuS/q4+YZkGY+N7gnb2YDqKVmy0kBGLWFRrCPPdrK9WCNZq1hveF3hl7zs/ohFpJghn3lH/hiR8UEZ+lWJDtFTbQgNyCkcmmunhi7q3iOBA4egExzYIQc19ixxmny+6dkOeqpkN2mzWlsZxGMhHEJAuyaRN2UuGO2L0Njyux7cqRyiuwUC2EmGhByLnAzgttPmKbJs2zrqhiQyEWlRATLVir0fODyKm9PYQjIJ9MD7qyOHVPoZ9IwbaAOAMQmghynHHGcG9TQGbBrVQLEo80pWCbjaLJTZQNZepD9RSQxaKmTTSUjDdLjdO7h18CIveDL2Y9gZ7hxYWkhM0mTM/uMAs+TX+BYO77qhW14ExAaKQYvsmvCZ3QNAGZWzC9iXanf/lKMdgGbeo0UgcmvNF1c5wwFiT3dRFRrQ/yZyh5IpANce+bOQJa1q+6gJgei4J0GikZ06sMh1FEE/XdxPJ3jqhsQYiYNlBTF9ohzGI1pAUnfnB5iR10//1DFRAm2meoKTZdNpw5gqULacFJ1xMQlQFh03cV0Q0JzCg050tU3NEr/LqN6fAZQUwHpN3wC2qcoSa8MAJEOHoGGEFUAKSriJjcGQJTCqNhBtsHOeJ3FCB4Q0w39MbTa4xcIb4PckQGONvRU9HJb0+9lbJJk4kJERZ0iaURbHPRRFJlvskTL817IaaJXt58/4MPtrmmf3yH8YY0IjWIuBFN1A66xPNm1IL/qD2LDjQqM094JD0U+FMfEGFBm45qgKgeqoF20AONS/fo9QtXYAYZ5nqniHhAiGgQYbdjOs6gHL31oS4gYgcZX3QoVV9lg1mFdsCGc/SPuNWeNzUsyBah1BNoyJlZI0U7+uUHuOKZerAtaJoPfKce0Tg0TUAzJNUItpe/1UNScvRUdC34KSJmo75CD1AnVIsgYiwIazSq2wU8oMH8jGaAEUQUIEx/75WdBfgnrW6oG4tKiDhAvDuExSCdujC6s4kJYlMXEA5Rqq/nQy6LxiowwoJOY5iQRoIFhLmT+swCZk54QISj9yspPJvMkqKxKH5pj4Y06ksY3nQoxQelCEdvByvb7xmigQVZLoTavmSg6QXooRQTbNPQ/jtF1AnVuGjWjnrQRhOusHNDVLANiyRTRNWl+xRCVUBwh8hNe9woul8XEM0syBKFlMNSIMQt0SDdRPM3R2yZ9EGBUHlvFAhRDp/XslD0g61XcMWDoQUZoSqgFqGGo+eIpoDzaKVaoVoYURtQm1B9pEHs0VtCznbrRzaA+XsLXhEIGYuKVjQABEJ1j9+YXqDqmjAWtOVgu/U+C0CIadBR21skYLoFnWG7tSwQGjp6Jppogoi86UmArAGHk2D7YZ8vbZsE25Lo7Ek90cShsyeVtUSMBcfBHzJEo2BbEp0Bq+eVImbAmGAbEh8oommoJogmlqrP8dVXMVCDDEs/ChCzsyBL0T9Fr0Q9Sbsz0k3UGeJypoCwmojZAa4rDTUpFiRyo3nU/MoRW9k1UV/TW43VN9fUVoRnW5C0u12hAmMQbP+BK75kC0g3SL8oA7KhZmYmzWwLTrNxWGEYGmwzxGwB4cdW37eAQWHW81NGURr50RJpLNgOIZo5ei4atiGyaQh9g+Ri4imAbEtw5FhiLCojZmRBFtQgEqDB5yfWEk/zgyxlzLeiFGz/yQEQlvUR5xDAIyZFU+mOfsg4RkQuFPCQPSC4i2uEu6DTi4TRVMHRE14e+IOYR5KxmwDReyJyMRy6kR87C1Zy9G4sYmbBdvwrIdaEWYgVM9YohmpxiC1sGomq6AwRc9bCo8VEB0k/V3qoFkXMMNgOic4uMEee2HAfNiIi2A4johOB1EV3gceoPPZ6bE9ELRvaH0TE/CxYY7XLMOVMXMiZl3YRsSvbAmJufTAQXVBEpeqDEcXICr3wKyBmOV2Kii5kqCcrWEJP5MdJNFa2BcQcLch8/jnqIL4NtZlhsEEt/EKoFkbMxYIT0XocCI8ohCW0nWou/MqIeQGCR0QdR7A8KM0cLNhoLt3LiPk0UV90NQpZbICFzzsoC9ryyrb5/qCS6CNwp4D5HOg1woLOaueRGGzn6OhFHes0U8sTP+ejaMGgsvqvVgxgtsF2WLSZosua3GAB6SoWQ5yTBWusmWIOBlnSUW41QFiggXIkOc0H40SbKbbgAOngAHltoABxfhbkJQ2wtWmEohhKjr71V0DMNdiOiBb+QNfa8+A8t5qjX2aZMhPEuQJCetsWuoQSreavGqo1OSJbdMq/ifqC49zIscaiJ5531YNtjjhPC9ZY2IUsOuDLbY9USu+zYDuEOB8L1vhYo1HWU6m6rBBs7xdhwRo7wnaZT5FyqQTufgEWrPFvypjWZo2RTYoItqOiD83+q0ekN9ovINiOCmo1oUtFpagxntz0Nw+2W3MKtmNUz6UnOtOZ8qtosD3fJuoLSvxlW04fJsqvwsH2nJtoIProDCpdxxBOEYu0YI0bEXGsO1UNbrRXreIGGRCNv3WqQyYBTtwEr9Ux52A7RuAT+1khBgckOSKrhVCQBWvsQGl9mE07nTr6aDmSoixY45V2sxlsIJIJIxZnwRqvWa5RxjQRMIxYoAV9wWuYh6diLLq89LcsgGywuTZrpzaxxFi7YEcvCxbojcZT0un/W4pgO06szCZqK0pWEGz/iEsjUUyAz1fwddUbbUJ6kJaVIyk4VIsK9lm0v0lm0xs8D6eRlKCJBmKfCzrTHW3ORcTiQ7Wo2CdW9b7u2Gix44PPm8vls6AvVihdZ7TxK+N944gltKAvcBnn+AA1CLajtTpKBlg7gK8ijbHtlAbbEcQyNdFAEILXr3GIvAy1jFgyC/pixe5R0wyxDPW3MlvQF/v0BGIrQy5D/azMFvR1DO93q2bFSbAtf9TmR6kt6It99Fhp35SMzj40hROSZXT0EYHP2FBop0Gw/cDLkcwrjcRMMOFXKLdPSyn+BcQyzQeTxTKdFDKJ6OlgQFQsJF6wUJXxCKxSBOVIWtUCVMqyaLLzPBPEcgbbYc1OxrNdV1zk8L/5wuoD/F1ibqK6FnR7u1uXPCgPHH20VkeVLThN9moTATAGsRIWTDjDS4sOTBFZqBZCrIQFEwYZtiXoIwqxqIRYYQtObMj2kNpySjNfvig1YHrONs9/rq/JZairNYrOSMbz7hmimEdSDUcPsehsRy/kle7HlKEuc7DN1kpTajrFWLEasSj7kmV9NWVjJmLFaoRqNb5/WE/LqAxZsSIWrImfW0xBbAiH5/eb1ZgPTrWihjjxgyJiJdwESAlxGmxHanVUAlAJEYLtMGI1ABUQebD9p5KAqYhisC0iln+Q4ZqJKAfbfypoQV8zEBtVW9lOUCJiCLAyjj6qzXjEUNZ9JYLtJMVacXEs6CvGikkWrCZgjBUXy4K+QlZcNAv6kqyYZMGquQlZghXthWuiU3Erljed0lCxiItjQV+bUcQqzehVFLHiYlnQV8iKi+EmZElWXDwL+hKsuIgW9MWtyM7wLsYgw8WtuJAW9LUiAy6aBX2tLLYFfW0utgV9rSy2BX1tLjogtWKJ80Uz0NXJ8cxa7OXT/8jYh6fPUnWcAAAAAElFTkSuQmCC' width="250"  />
          <MDBCardText className="listtext">
          <NavLink to="/g1"><i class="fas fa-angle-double-right"></i>  <strong>4.G.A.1</strong> - Draw points, lines, line segments, rays, angles (right, acute, obtuse), and perpendicular and parallel lines.</NavLink><br></br>
          <NavLink to="/g2"><i class="fas fa-angle-double-right"></i>  <strong>4.G.A.2</strong> - Classify two-dimensional figures based on the presence or absence of parallel or perpendicular lines, or the presence or absence of angles of a specified size.</NavLink><br></br>
          <NavLink to="/g3"><i class="fas fa-angle-double-right"></i>  <strong>4.G.A.3</strong> - Recognize a line of symmetry for a two-dimensional figure as a line across the figure such that the figure can be folded along the line into matching parts.</NavLink><br></br>
          </MDBCardText>
          {/* <MDBBtn color="primary">go somewhere</MDBBtn> */}
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer>

          </div>

      </div>
      </div>
    )
  }
const mapStateToProps = (state) => state
  
    
export default connect(mapStateToProps)(StandardsList)