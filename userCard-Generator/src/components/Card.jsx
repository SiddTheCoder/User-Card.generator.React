import userImage from '../assets/coat.jpg';

export default function Card({
    userName='SiddTheCoder',
    userNickName='Technoxian Parth',
}) {
    return(
        <>
        <div className="h-[400px] w-[50%] bg-purple-500 relative rounded-xl overflow-hidden">
         <div className="h-full w-full flex">
            <div className="h-full w-[40%] flex justify-center items-center">
                <div style={{backgroundImage : `url(${userImage})`}} className="h-64 w-64 bg-purple-800 rounded-full overflow-hidden bg-contain bg-no-repeat"></div>
            </div>
            <div className="h-full w-[60%] bg-purple-400 flex flex-col p-5 pt-10">
                <div className="text-4xl text-purple-50">{userName}</div>
                <div className="text-2xl text-black">{userNickName}</div>
                <div className="text-sm text-black mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cumque, iusto illum ipsam magni vitae dolorem quae ad ratione aut laudantium. Distinctio natus quos iste veritatis autem nostrum architecto doloremque accusamus esse, debitis vitae et iusto dicta velit quae pariatur!</div>
                <button className="bg-purple-900 text-white w-44 text-xl rounded relative top-5 py-2 px-5 hover:bg-purple-800 ">Know More</button>
            </div>
         </div>
        </div>
        </>
    )
}