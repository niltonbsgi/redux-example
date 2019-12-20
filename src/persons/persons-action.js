export const _List = () => {
    return (
        fetch('https://swapi.co/api/people')
        .then(
            (resp) => ({
                type: 'LIST',
                payload: resp.json()
            }),
            (err)=> ({
                type: 'ERROR',
                payload: err
            }))
        .catch( (err) => ({
            type: 'ERROR',
            payload: err
        }) )
    );
};
