

export default function GitUser({user}){
    const {avatar_url,followers,following,public_repos,name,login,created_at}=user

    const createDate = new Date(created_at)

    return <div className="user">
        <div>
          <img src={avatar_url} className="avathar" alt=""></img>
        </div>
        <div className="name-container">
            <a href={`http://github.com/${login}`} target="blank" >{name || login}</a>
            <p>User join on {`${createDate.getDate()} ${createDate.toLocaleString('en-us',
               { month :'short'})
            }${createDate.getFullYear()}`}</p>
        </div>
        <div>
            <div>
               <p>Public Repose</p>
               <p>{public_repos}</p>
            </div>
            <div>
                <p>Followers</p>
                <p>{followers}</p>
                
            </div>
            <div>
                <p>Following</p>
                <p>{following}</p>
            </div>
        </div>
    </div>
}