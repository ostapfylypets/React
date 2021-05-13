import './Post.css'

export default function Post({value, findSinglePost}) {
    return (
        <div className={'post-border'}>
            <span className={'id'}>{value.id}</span>
            <span>{value.title}</span>
            <button onClick={() => findSinglePost(value.id)}>Show more details</button>
        </div>
    );
}