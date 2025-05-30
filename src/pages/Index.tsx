
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ExternalLink, TrendingUp, AlertTriangle, Users, Target, CheckCircle } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'google-performance', 'analise-tecnica', 'analise-humana', 'proposta', 'agencia'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'google-performance', label: 'Google Performance' },
    { id: 'analise-tecnica', label: 'Análise Técnica' },
    { id: 'analise-humana', label: 'Análise Humana' },
    { id: 'proposta', label: 'Proposta' },
    { id: 'agencia', label: 'Agência' }
  ];

  const keywordData = [
    { keyword: 'imagem da sagrada família', volume: 33.1 },
    { keyword: 'imagem de são josé', volume: 18.1 },
    { keyword: 'imagem do sagrado coração de jesus', volume: 12.1 },
    { keyword: 'loja católica', volume: 5.4 },
    { keyword: 'loja de artigos religiosos católicos', volume: 2.4 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center py-4">
            <div className="flex space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Análise Digital
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Relatório de Performance e Estratégia Digital
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto shadow-xl">
            <CardHeader className="text-center bg-gradient-to-r from-amber-50 to-amber-100">
              <div className="flex justify-center mb-4">
                <img 
                  src="/lovable-uploads/78dd96d5-e633-48ab-8b67-07ac48d3fd74.png" 
                  alt="Divino Amor Logo" 
                  className="h-24 w-auto"
                />
              </div>
              <CardTitle className="text-2xl text-amber-800">Espaço Católico Divino Amor</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Informações da Empresa</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Segmento:</strong> Artigos Religiosos Católicos</p>
                    <p><strong>Modelo:</strong> Franquia + E-commerce</p>
                    <p><strong>Presença:</strong> Matriz e Filiais</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Presença Digital</h3>
                  <div className="space-y-2 text-gray-600">
                    <p><strong>Site Franquia:</strong> divinoamor.com</p>
                    <p><strong>Site E-commerce:</strong> divinoamor.com.br</p>
                    <p><strong>Status:</strong> Múltiplas unidades</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Google Performance Section */}
      <section id="google-performance" className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Desempenho no Google
            </h2>
            <p className="text-lg text-gray-600">Análise atual da presença digital</p>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                Visão Geral do Site
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">10</div>
                  <div className="text-sm text-gray-600">Pontuação de Autoridade</div>
                  <div className="text-xs text-red-500 mt-1">/100 máximo</div>
                </div>
                
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">1.900</div>
                  <div className="text-sm text-gray-600">Tráfego Orgânico/Mês</div>
                  <div className="text-xs text-orange-500 mt-1">Estimado</div>
                </div>
                
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">4</div>
                  <div className="text-sm text-gray-600">Recomendações</div>
                  <div className="text-xs text-yellow-500 mt-1">Outros sites</div>
                </div>
                
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-sm font-semibold text-blue-600 mb-2">Divino Amor</div>
                  <div className="text-sm text-gray-600">Palavra-chave Principal</div>
                  <Badge variant="outline" className="text-xs mt-1">Informativa</Badge>
                </div>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center gap-2 text-red-700">
                  <AlertTriangle className="w-5 h-5" />
                  <strong>Avaliação:</strong>
                </div>
                <p className="text-red-600 mt-2">O site não tem relevância no Google.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Analysis Section */}
      <section id="analise-tecnica" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Análise Técnica
            </h2>
            <p className="text-lg text-gray-600">Diagnóstico detalhado dos problemas técnicos</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-red-600">Problemas Críticos Identificados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <span className="text-red-700">Erro crítico: Status 403</span>
                  <Badge variant="destructive">Crítico</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <span className="text-orange-700">Links internos quebrados</span>
                  <Badge variant="outline" className="text-orange-600">209</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <span className="text-yellow-700">Meta descrições duplicadas</span>
                  <Badge variant="outline" className="text-yellow-600">27 páginas</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-700">Títulos duplicados</span>
                  <Badge variant="outline" className="text-blue-600">13 ocorrências</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="text-purple-700">Conteúdo duplicado</span>
                  <Badge variant="outline" className="text-purple-600">9 páginas</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle>Score Atual vs. Benchmark</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Score Atual</span>
                      <span className="text-sm text-orange-600">79%</span>
                    </div>
                    <Progress value={79} className="h-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Top 10% dos Sites</span>
                      <span className="text-sm text-green-600">92%</span>
                    </div>
                    <Progress value={92} className="h-3" />
                  </div>
                  
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-6">
                    <p className="text-orange-700">
                      <strong>Gap de Performance:</strong> 13 pontos percentuais
                      separam o site atual dos melhores da categoria.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Human Analysis Section */}
      <section id="analise-humana" className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Análise Humana
            </h2>
            <p className="text-lg text-gray-600">Insights estratégicos e oportunidades</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Análise Necessária
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Resolver erro 403 do servidor
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Avaliar perfis Google da matriz
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Analisar performance das filiais
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                    Estratégia de tráfego local
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl lg:col-span-2">
              <CardHeader>
                <CardTitle>Palavras-chave de Oportunidade</CardTitle>
                <p className="text-sm text-gray-600">
                  Volume mensal de buscas | Apenas algumas entre centenas disponíveis
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {keywordData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">{item.keyword}</span>
                      <Badge variant="outline">{item.volume}k/mês</Badge>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-700 text-sm">
                    <strong>Observação:</strong> O tráfego ainda não é dominado pela Divino Amor. 
                    Grande potencial de crescimento identificado.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Primeiras Impressões</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Problemas Identificados</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Domínios distintos (.com / .com.br) causam confusão</li>
                    <li>• Site da Franquia usa blocos de imagem sem otimização</li>
                    <li>• Impacto negativo na indexação do Google</li>
                    <li>• Problemas de usabilidade mobile</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Melhorias Necessárias</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Site da Loja precisa de otimização para Google</li>
                    <li>• Páginas de produtos não otimizadas</li>
                    <li>• Unidades filiais sem destaque</li>
                    <li>• Estratégia de conteúdo estruturado</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Proposal Section */}
      <section id="proposta" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proposta Estratégica
            </h2>
            <p className="text-lg text-gray-600">Soluções personalizadas para crescimento digital</p>
          </div>

          <Card className="shadow-xl mb-8">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <CardTitle>Análise e Objetivos</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6 leading-relaxed">
                A Divino Amor se destaca como franquia pelo trabalho realizado e pelo crescimento expressivo. 
                Nota-se dedicação à operação física da marca, restando agora um esforço equivalente no ambiente 
                digital, que parece estar em fase inicial.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-2">Objetivo 1</h4>
                  <p className="text-sm text-gray-600">Levar a Divino Amor ao topo do Google em múltiplos termos</p>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-2">Objetivo 2</h4>
                  <p className="text-sm text-gray-600">Melhorar fundamentos técnicos e experiência do usuário</p>
                </div>
                
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-2">Objetivo 3</h4>
                  <p className="text-sm text-gray-600">Projetar novas estruturas estratégicas de posicionamento</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <Card className="shadow-xl border-2 border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-800">Opção 1: Consultoria</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  A Duobro realiza um diagnóstico técnico e desenvolve uma estrutura digital estratégica 
                  para que a Divino Amor cresça no ambiente digital no médio e longo prazo, sem depender 
                  de anúncios pagos.
                </p>
                <Badge variant="outline" className="text-blue-600">Estratégico</Badge>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-2 border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-green-800">Opção 2: Consultoria + Execução</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  A Duobro executa todo o plano desenvolvido e oferece suporte durante todo o processo. 
                  Nosso modelo de trabalho é baseado em automação, desenvolvimento personalizado e 
                  relatórios de desempenho que realmente importam.
                </p>
                <Badge variant="outline" className="text-green-600">Completo</Badge>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-2 border-purple-200">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-purple-800">Opção 3: Consultoria + Execução + Católicos Online</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  Neste modelo, incluiremos uma proposta diferenciada para que a Divino Amor esteja 
                  presente em nossa nova rede, a Católicos Online.
                </p>
                <Badge variant="outline" className="text-purple-600">Premium</Badge>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-xl bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Chamada de Ação</h3>
              <p className="text-lg mb-6">Agende sua reunião até 03 de Junho</p>
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-gray-100"
                onClick={() => window.open('#', '_blank')}
              >
                Escolha uma data aqui
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Agency Section */}
      <section id="agencia" className="py-16 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/8f98c4bb-4e64-4273-84a4-100ec48a1b18.png" 
                alt="Duobro Tech Logo" 
                className="h-16 w-auto"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre a Agência</h2>
            <p className="text-lg text-gray-300">Especialistas em crescimento digital sustentável</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Duobro Tech</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                A Duobro Tech é formada pelos irmãos Jones Lauriano e Jener Lauriano. 
                Após nos dedicarmos por seis anos a uma startup no norte do país — onde 
                desenvolvemos, do zero, plataformas de gestão de frotas que movimentaram 
                mais de 250 milhões de reais — decidimos criar uma agência que vai além 
                do básico em marketing digital.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Pensamos fora da caixa para construir operações robustas</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Nosso lema é escalar sem onerar</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Sem fórmulas mágicas. Com resultados reais.</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl">
              <h4 className="text-xl font-bold mb-4">Nossa Experiência</h4>
              <div className="space-y-4">
                <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold">6 anos</div>
                  <div className="text-sm">Experiência em startup</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold">R$ 250M+</div>
                  <div className="text-sm">Movimentados em plataformas</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">Desenvolvimento próprio</div>
                </div>
              </div>
              
              <Button 
                className="w-full mt-6 bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => window.open('#', '_blank')}
              >
                Conheça a Duobro Tech
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
