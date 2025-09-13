function Profile () {

     const name="siva jyothi"
     const num=19
     const isstudent=true
    return (
     <div>
        <p>name:{name}</p>
        <p>age:{num}</p>
        <p>{isstudent===true?"i am a student":"i am not astudent"}</p>
    <p>this is a profile</p>
    </div>
    )
}
export default Profile;