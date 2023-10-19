import java.util.ArrayList;
import java.util.Scanner;

public class Produto {
    private int id;
    private String nome;
    private double preco;

    public Produto(int id, String nome, double preco) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }

    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public double getPreco() {
        return preco;
    }
}

public class ItensCarrinho {
    private Produto produto;
    private int quantidade;

    public ItensCarrinho(Produto produto, int quantidade) {
        this.produto = produto;
        this.quantidade = quantidade;
    }

    public Produto getProduto() {
        return produto;
    }

    public int getQuantidade() {
        return quantidade;
    }
}

public class Carrinho {
    private ArrayList<ItensCarrinho> itens;
    private double valorTotal;

    public Carrinho() {
        itens = new ArrayList<ItensCarrinho>();
        valorTotal = 0.0;
    }

    public void adicionarItem(Produto produto, int quantidade) {
        ItensCarrinho item = new ItensCarrinho(produto, quantidade);
        itens.add(item);
        valorTotal += produto.getPreco() * quantidade;
    }

    public void listarCarrinho() {
        System.out.println("Lista de itens no carrinho:");
        for (ItensCarrinho item : itens) {
            System.out.println(item.getProduto().getNome() + " - Quantidade: " + item.getQuantidade() + " - Preço unitário: R$" + item.getProduto().getPreco());
        }
        System.out.println("Valor total do carrinho: R$" + valorTotal);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<Produto> produtos = new ArrayList<Produto>();
        Carrinho carrinho = new Carrinho();

        while (true) {
            System.out.println("Escolha uma opção:");
            System.out.println("1 - Incluir produto");
            System.out.println("2 - Adicionar produto ao carrinho");
            System.out.println("3 - Listar carrinho");
            System.out.println("4 - Sair");

            int opcao = scanner.nextInt();

            if (opcao == 1) {
                System.out.println("Digite o ID do produto:");
                int id = scanner.nextInt();
                scanner.nextLine();

                System.out.println("Digite o nome do produto:");
                String nome = scanner.nextLine();

                System.out.println("Digite o preço do produto:");
                double preco = scanner.nextDouble();

                Produto produto = new Produto(id, nome, preco);
                produtos.add(produto);

                System.out.println("Produto adicionado com sucesso!");
            } else if (opcao == 2) {
                if (produtos.size() == 0) {
                    System.out.println("Não há produtos cadastrados!");
                    continue;
                }

                while (true) {
                    System.out.println("Escolha um produto para adicionar ao carrinho:");

                    for (int i = 0; i < produtos.size(); i++) {
                        Produto produto = produtos.get(i);
                        System.out.println(i + " - " + produto.getNome() + " - Preço: R$" + produto.getPreco());
                    }

                    int escolhaProduto = scanner.nextInt();
                    Produto produtoEscolhido = produtos.get(escolhaProduto);

                    System.out.println("Digite a quantidade:");
                    int quantidade = scanner.nextInt();

                    carrinho.adicionarItem(produtoEscolhido, quantidade);

                    System.out.println("Produto adicionado ao carrinho!");

                    System.out.println("Deseja adicionar outro produto? (S/N)");
                    String resposta = scanner.next();

                    if (!resposta.equalsIgnoreCase("S")) {
                        break;
                    }
                }
            } else if (opcao == 3) {
                carrinho.listarCarrinho();
            } else if (opcao == 4) {
                break;
            } else {
                System.out.println("Opção inválida!");
            }
        }
    }
}
