import Image from 'next/image'
import RenderImage from '@/assets/images/render_logo.png'
import Container from '../Container'

export default function BaseBoard() {
  return (
    <div
      id="Baseboard"
      className="mt-36 w-full border-t-2 border-yellow-800 bg-blue-200 font-titilliumWeb text-white"
    >
      <Container>
        <div
          id="Baseboard"
          className="flex flex-col items-center justify-center p-16 font-titilliumWeb text-white laptop:flex-row laptop:justify-evenly"
        >
          <div className="flex gap-12 laptop:gap-24">
            <div className="flex flex-col gap-4">
              <h1 className="font-mavenPro text-2xl font-semibold">
                Meios de contato
              </h1>
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="font-semibold">E-mail</h2>
                  <p>devteam@gmail.com</p>
                  <p>feliperoberto092@gmail.com</p>
                </div>
                <div>
                  <h2 className="font-semibold">Telefones</h2>
                  <p>(11) 95080-7074</p>
                  <p>(11) 94295-3291</p>
                  <p>(11) 97443-9730</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="font-mavenPro text-2xl font-semibold">
                Redes sociais
              </h1>
              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="font-semibold">Instagram</h2>
                  <p>@devteam.on</p>
                </div>
                <div>
                  <h2 className="font-semibold">TikTok</h2>
                  <p>@devteamon</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Image
              alt="Logo DevTeam 3D model"
              src={RenderImage}
              width={250}
              height={250}
            ></Image>
          </div>
        </div>
      </Container>
    </div>
  )
}
