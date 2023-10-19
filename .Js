import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        ArrayList<Produto> listaProdutos = new ArrayList<>();
        Carrinho carrinho = new Carrinho();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("Escolha uma opção:");
            System.out.println("1 - Incluir produto");
            System.out.println("2 - Adicionar produto ao carrinho");
            System.out.println("3 - Listar carrinho");
            System.out.println("4 - Sair");
            int opcao = scanner.nextInt();
            scanner.nextLine();  // Limpar a quebra de linha

            switch (opcao) {
                case 1:
                    System.out.println("Digite o ID do produto:");
                    int idProduto = scanner.nextInt();
                    scanner.nextLine();
                    System.out.println("Digite o nome do produto:");
                    String nomeProduto = scanner.nextLine();
                    System.out.println("Digite o preço do produto:");
                    double precoProduto = scanner.nextDouble();
                    Produto novoProduto = new Produto(idProduto, nomeProduto, precoProduto);
                    listaProdutos.add(novoProduto);
                    break;

                case 2:
                    System.out.println("Lista de produtos disponíveis:");
                    for (Produto produto : listaProdutos) {
                        System.out.println("ID: " + produto.getId() + ", Nome: " + produto.getNome() + ", Preço: " + produto.getPreco());
                    }

                    System.out.println("Digite o ID do produto que deseja adicionar ao carrinho:");
                    int idProdutoCarrinho = scanner.nextInt();
                    System.out.println("Digite a quantidade desejada:");
                    int quantidade = scanner.nextInt();
                    for (Produto produto : listaProdutos) {
                        if (produto.getId() == idProdutoCarrinho) {
                            carrinho.adicionarItem(produto, quantidade);
                            break;
                        }
                    }
                    break;

                case 3:
                    System.out.println("Itens no carrinho:");
                    carrinho.listarCarrinho();
                    break;

                case 4:
                    System.out.println("Saindo da aplicação.");
                    scanner.close();
                    System.exit(0);
                    break;

                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        }
    }
}
