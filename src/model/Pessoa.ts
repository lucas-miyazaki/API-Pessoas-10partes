export class Pessoa {
    private nome: string;
    private cpf: string;
    private dataNascimento: Date;
    private telefone: string;
    private endereco: string;
    private altura: number;
    private peso: number;

    public constructor(
        _nome: string,
        _cpf: string,
        _dataNascimento: Date,
        _telefone: string,
        _endereco: string,
        _altura: number,
        _peso: number
    ) {
        this.nome = _nome;
        this.cpf = _cpf;
        this.dataNascimento = _dataNascimento;
        this.telefone = _telefone;
        this.endereco = _endereco;
        this.altura = _altura;
        this.peso = _peso;
    }

    /**
     * Atribui o Nome da pessoa
     *
     * @param _nome
     * Nome da pessoa
     */
    public setNome(_nome: string): void {
        this.nome = _nome;
    }
    
    public getNome(): string {
        return this.nome;
    }

    /**
     * Atribui o Cpf da pessoa
     *
     * @param _cpf
     * Cpf da pessoa
     */
    public setCpf(_cpf: string): void {
        this.cpf = _cpf;
    }
    
    public getCpf(): string {
        return this.cpf;
    }

    /**
     * Atribui a data nascimento da pessoa
     *
     * @param _dataNascimento
     * Data de Nascimento da pessoa
     */
    public setTelefone(_telefone: string): void {
        this.telefone = _telefone;
    }
    
    public getTelefone(): string {
        return this.telefone;
    }

    /**
     * Atribui o endereço da pessoa
     *
     * @param _endereco
     * Endereço da pessoa
     */
    public setEndereco(_endereco: string): void {
        this.endereco = _endereco;
    }
    
    public getEndereco(): string {
        return this.endereco;
    }

    /**
     * Atribui a altura da pessoa
     *
     * @param _altura
     * Altura da pessoa
     */
    public setAltura(_altura: number): void {
        this.altura = _altura;
    }
    
    public getAltura(): number {
        return this.altura;
    }

    /**
     * Atribui o peso da pessoa
     *
     * @param _peso
     * Peso da pessoa
     */
    public setPeso(_peso: number): void {
        this.peso = _peso;
    }
    
    public getPeso(): number {
        return this.peso;
    }

    // Implementação de métodos  
    public Falar(): void {
        // Logica de negócio
        console.log(`${this.nome} está falando!`);
    }
    public FalarFrase(_frase: string): void {
        // Lógica de negócio
        console.log(`${this.nome} fala: ${_frase}`);
    }
    public Andar(): void {
        // Logica de negócio
        console.log(`${this.nome} está caminhando`);
    }
    public AndarQuilometros(_quilometros: string): void {
        setTimeout(() => {
        // Lógica de negócio
        console.log(`${this.nome} está caminhou ${_quilometros} Km`);
    }, 3000);
    }
    public Comer(): void {
        // Logica de negócio
        console.log(`${this.nome} está comendo`);
    }
    public ComerComida(_prato: string): void {
        // Lógica de negócio
        console.log(`${this.nome} está comendo ${_prato}`);
    }
    public mostrarPessoa() {
        console.log(`Nome: ${this.nome}
                    CPF: ${this.cpf}
                    Data: ${this.dataNascimento}
                    Telefone: ${this.telefone}
                    Endereço: ${this.endereco}
                    Altura: ${this.altura}
                    Peso: ${this.peso};
        `)
    }
}
