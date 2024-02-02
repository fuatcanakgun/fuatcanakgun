/** @type {import('./$types').PageLoad} */
export const load = ({ params }) => {
    return {
        docNo: params.docNo
    }
}