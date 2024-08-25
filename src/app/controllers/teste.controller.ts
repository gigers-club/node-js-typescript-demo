class TesteController {
    async get(req: any, res: any) {
        res.send('API Teste OK!')
    }
}

export default new TesteController();