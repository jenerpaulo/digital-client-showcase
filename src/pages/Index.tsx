import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ExternalLink, TrendingUp, AlertTriangle, Users, Target, CheckCircle, Menu, X } from 'lucide-react';
import { ThemeToggle } from "@/components/theme-toggle";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'google-performance', 'analise-tecnica', 'analise-humana', 'resultados', 'proposta', 'agencia'];
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
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };
  const menuItems = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'google-performance',
    label: 'Google Performance'
  }, {
    id: 'analise-tecnica',
    label: 'Análise Técnica'
  }, {
    id: 'analise-humana',
    label: 'Análise Humana'
  }, {
    id: 'resultados',
    label: 'Resultados'
  }, {
    id: 'proposta',
    label: 'Proposta'
  }, {
    id: 'agencia',
    label: 'Agência'
  }];
  const keywordData = [{
    keyword: 'imagem da sagrada família',
    volume: 33.1
  }, {
    keyword: 'imagem de são josé',
    volume: 18.1
  }, {
    keyword: 'imagem do sagrado coração de jesus',
    volume: 12.1
  }, {
    keyword: 'loja católica',
    volume: 5.4
  }, {
    keyword: 'loja de artigos religiosos católicos',
    volume: 2.4
  }];
  const rankingData = [{
    month: 'Abril',
    position: 41
  }, {
    month: 'Maio',
    position: 7
  }];
  const chartConfig = {
    position: {
      label: "Posição",
      color: "hsl(var(--chart-1))"
    }
  };
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${activeSection === item.id ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'}`}>
                  {item.label}
                </button>)}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none">
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            <ThemeToggle />
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                {menuItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`px-3 py-2 text-left text-sm font-medium transition-colors duration-200 rounded-md ${activeSection === item.id ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-slate-800'}`}>
                    {item.label}
                  </button>)}
              </div>
            </div>}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Performance Digital
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Análise de Performance & Proposta de Escalada Digital
            </p>
          </div>
          
          <Card className="max-w-4xl mx-auto shadow-xl dark:bg-slate-800 dark:border-slate-700">
            <CardHeader className="text-center bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20">
              <div className="flex justify-center mb-4">
                <img src="/lovable-uploads/78dd96d5-e633-48ab-8b67-07ac48d3fd74.png" alt="Divino Amor Logo" className="h-24 w-auto" />
              </div>
              <CardTitle className="text-2xl text-amber-800 dark:text-amber-200">Espaço Católico Divino Amor</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Informações da Empresa</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p><strong>Segmento:</strong> Artigos Religiosos Católicos</p>
                    <p><strong>Modelo:</strong> Franquia Físca + E-commerce</p>
                    <p><strong>Abrangência:</strong> Brasil</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Presença Digital</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p><strong>Site Franquia:</strong> espacocatolicodivinoamor.com</p>
                    <p><strong>Site E-commerce:</strong> espacocatolicodivinoamor.com.br</p>
                    <p><strong>Redes Sociais:</strong> Sim</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Google Performance Section */}
      <section id="google-performance" className="py-16 bg-slate-200 dark:bg-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Análise de Autoridade</h2>
            <p className="text-3xl text-gray-600 dark:text-cyan-500">Google Performance</p>
          </div>

          <Card className="shadow-xl dark:bg-slate-700 dark:border-slate-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 dark:text-white">
                <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                Métricas Importantes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 rounded-lg bg-red-50 dark:bg-gray-900">
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">10</div>
                  <div className="text-base text-gray-600 dark:text-gray-700">Pontuação de Autoridade</div>
                  <div className="text-base text-red-500 dark:text-red-500 mt-1">10/100 máximo</div>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-orange-50 dark:bg-slate-800">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">3000</div>
                  <div className="text-base text-gray-600 dark:text-gray-700">Tráfego Orgânico/Mês</div>
                  <div className="text-base text-orange-500 dark:text-orange-500 mt-1">Estimado</div>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-yellow-50 dark:bg-slate-900">
                  <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">4</div>
                  <div className="text-base text-gray-600 dark:text-gray-800">Recomendações</div>
                  <div className="text-base text-yellow-500 dark:text-yellow-700 mt-1">De outros sites</div>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-blue-50 dark:bg-slate-800">
                  <div className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Divino Amor</div>
                  <div className="text-base text-gray-600 dark:text-gray-600">Palavra-chave Principal</div>
                  <Badge variant="outline" className="text-base mt-1 dark:border-gray-400">Intenção: Informacional</Badge>
                </div>
              </div>
              
              <div className="border border-red-200 dark:border-red-800 rounded-lg p-4 bg-red-50 dark:bg-red-950">
                <div className="flex items-center gap-2 text-red-700 dark:text-red-400">
                  <AlertTriangle className="w-5 h-5" />
                  <strong>Avaliação:</strong>
                </div>
                <p className="text-red-600 dark:text-red-400 mt-2 font-normal">Atualmente, os resultados de busca estão restritos a pesquisas diretas pelo nome da empresa. Isso indica que o site da Divino Amor ainda não possui autoridade digital.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Analysis Section */}
      <section id="analise-tecnica" className="py-16 bg-gray-50 dark:bg-slate-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Análise Técnica
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Diagnóstico dos problemas técnicos</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="shadow-xl bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-red-600 dark:text-red-400">Problemas Identificados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <span className="text-red-700 dark:text-red-400">Erro crítico: Status 403</span>
                  <Badge variant="destructive">Crítico</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                  <span className="text-orange-700 dark:text-orange-400">Links internos quebrados</span>
                  <Badge variant="outline" className="text-orange-600 dark:text-orange-400 dark:border-orange-600">209</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <span className="text-yellow-700 dark:text-yellow-400">Meta descrições duplicadas</span>
                  <Badge variant="outline" className="text-yellow-600 dark:text-yellow-400 dark:border-yellow-600">27 páginas</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <span className="text-blue-700 dark:text-blue-400">Títulos duplicados</span>
                  <Badge variant="outline" className="text-blue-600 dark:text-blue-400 dark:border-blue-600">13 ocorrências</Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <span className="text-purple-700 dark:text-purple-400">Conteúdo duplicado</span>
                  <Badge variant="outline" className="text-purple-600 dark:text-purple-400 dark:border-purple-600">9 páginas</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="dark:text-white">Score Atual vs. Benchmark</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium dark:text-gray-300">Score Atual Divino Amor</span>
                      <span className="text-sm text-orange-600 dark:text-orange-400">79%</span>
                    </div>
                    <Progress value={79} className="h-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium dark:text-gray-300">Média Top 10% dos Sites</span>
                      <span className="text-sm text-green-600 dark:text-green-400">92%</span>
                    </div>
                    <Progress value={92} className="h-3" />
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4 mt-6">
                    <p className="text-orange-700 dark:text-orange-400">
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
      <section id="analise-humana" className="py-16 bg-slate-200 dark:bg-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Análise Humana
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Insights estratégicos e oportunidades</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-xl bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-600 order-3 lg:order-first">
              <CardHeader className="bg-gray-50 dark:bg-slate-900">
                <CardTitle className="flex items-center gap-2 dark:text-white">
                  <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  Análise Pendente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                    Resolver erro 403 do servidor
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                    Análise detalhada de termos relevantes
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                    Análise do Google Profile da matriz
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                    Análise de performance das filiais
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                    Análise das redes sociais
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 mt-1 flex-shrink-0" />
                    Análise dos canais de atendimento
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl lg:col-span-2 bg-white dark:bg-slate-900 border-gray-200 dark:border-slate-600 order-1 lg:order-last">
              <CardHeader className="bg-gray-50 dark:bg-slate-900">
                <CardTitle className="dark:text-white">Oportunidades de Palavras-Chave  
              </CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Volume mensal de buscas relevantes | Apenas algumas entre centenas disponíveis
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {keywordData.map((item, index) => <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-600 rounded-lg">
                      <span className="text-gray-700 dark:text-gray-200">{item.keyword}</span>
                      <Badge variant="outline" className="dark:border-gray-500">{item.volume} mil buscas/mês</Badge>
                    </div>)}
                </div>            
                
                <div className="mt-6 p-4 rounded-lg bg-red-200">
                  <p className="text-sm text-red-700">
                    <strong>Observação:</strong> O tráfego ainda não é dominado pela Divino Amor. 
                    Grande potencial de crescimento identificado.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-xl bg-white dark:bg-slate-700 border-gray-200 dark:border-slate-600">
            <CardHeader className="bg-gray-50 dark:bg-gray-800">
              <CardTitle className="dark:text-white">Primeiras Impressões</CardTitle>
            </CardHeader>
            <CardContent className="bg-white dark:bg-slate-800">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Problemas Identificados</h4>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-base leading-relaxed flex-1">
                    <li>• Domínios distintos (.com / .com.br) tendem a gerar confusão entre os usuários</li>
                    <li>• O site da franquia não está otimizado para ranqueamento no Google</li>
                    <li>• O e-commerce não está apto a competir nas primeiras posições do Google</li>
                    <li>• Há problemas de usabilidade na versão mobile</li>
                    <li>• As unidades filiais não apresentam relevância significativa no ambiente digital</li>
                    <li>• Os sites não aproveitam o alto volume de buscas por termos relevantes</li>
                  </ul>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Feedback da Análise Inicial</h4>
                  <div className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed flex-1 flex items-start">
                    <p>É necessário um levantamento mais aprofundado, não apenas para obter um diagnóstico completo, mas também para revelar o grande potencial que aguarda a Divino Amor no ambiente digital. Há oportunidades claras de melhoria — desde ajustes simples nas páginas até ações mais complexas e a possível expansão da estrutura do site. No entanto, considerando a sólida experiência da Divino Amor no âmbito presencial, temos plena confiança de que sua presença digital pode alcançar novos patamares com o apoio do time certo</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Results Section - Moved above Proposal */}
      <section id="resultados" className="py-16 bg-slate-100 dark:bg-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Case de Sucesso</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A <a href="https://clinicaimplamed.com.br/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Clínica Implamed</a>, cliente Duobro, alcançou a primeira página do Google em apenas 2 meses para seu principal termo relacionado a implantes dentários — saltando da 41ª para a 7ª posição. Agora, está a poucos passos do topo.
            </p>
          </div>

          <Card className="shadow-xl max-w-4xl mx-auto dark:bg-slate-700 dark:border-slate-600">
            <CardHeader>
              <CardTitle className="text-center dark:text-white">Posicionamento no Google</CardTitle>
              <p className="text-center text-gray-600 dark:text-gray-300">Evolução da posição nos resultados de busca</p>
            </CardHeader>
            <CardContent className="p-8">
              <ChartContainer config={chartConfig} className="h-80 w-full">
                <LineChart data={rankingData}>
                  <XAxis dataKey="month" />
                  <YAxis domain={[1, 50]} reversed={true} label={{
                  value: 'Posição no Google',
                  angle: -90,
                  position: 'insideLeft'
                }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="position" stroke="#3b82f6" strokeWidth={4} dot={{
                  fill: '#3b82f6',
                  strokeWidth: 2,
                  r: 8
                }} />
                </LineChart>
              </ChartContainer>
              
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-lg bg-red-50 dark:bg-red-900/20">
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">41ª</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Posição Inicial (Abril)</div>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">7ª</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Posição Atual (Maio)</div>
                </div>
              </div>
              
              <div className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <p className="text-blue-700 dark:text-blue-400 text-center">
                  <strong>Resultado:</strong> Melhoria de 34 posições em apenas 2 meses
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Proposal Section - Now after Results */}
      <section id="proposta" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Proposta Estratégica
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Soluções personalizadas para crescimento digital</p>
          </div>

          <Card className="shadow-xl mb-8 dark:bg-slate-800 dark:border-slate-700">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white bg-gray-100 dark:bg-zinc-100">
              <CardTitle className="text-xl">Objetivos & Propostas</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                A Divino Amor se destaca como franquia pelo trabalho realizado e pelo crescimento expressivo. 
                Nota-se dedicação à operação física da marca, restando agora um esforço equivalente no ambiente 
                digital, que parece estar em fase inicial.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-lg bg-sky-600">
                  <Target className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2 text-slate-50 text-lg">Objetivo 1</h4>
                  <p className="text-slate-50 text-base">Levar a Divino Amor ao topo do Google em múltiplos termos sem a necessidade de pagar por cliques.</p>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-teal-500">
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2 text-slate-50 text-lg">Objetivo 2</h4>
                  <p className="text-slate-50 text-base">Melhorar fundamentos técnicos e experiência do usuário para atrair novos franqueados e reter clientes.</p>
                </div>
                
                <div className="text-center p-4 rounded-lg bg-violet-900">
                  <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                  <h4 className="font-semibold mb-2 text-slate-50 text-lg">Objetivo 3</h4>
                  <p className="text-slate-50 text-base">Criar novos canais de vendas e utlizar IA para automatizar processos sem perder a sensibilidade do negócio.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <Card className="shadow-xl border-2 border-blue-200 dark:border-blue-700 dark:bg-slate-800">
              <CardHeader className="bg-blue-50 dark:bg-blue-900/20">
                <CardTitle className="text-blue-800 dark:text-blue-300">Opção 1: Consultoria</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 dark:text-gray-300 text-base mb-4">
                  A Duobro realiza um diagnóstico técnico e desenvolve uma estrutura digital estratégica 
                  para que a Divino Amor cresça no ambiente digital no médio e longo prazo, sem depender 
                  de anúncios pagos.
                </p>
                <Badge variant="outline" className="text-blue-600 dark:text-blue-400 dark:border-blue-600 text-base">Estratégico</Badge>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-2 border-green-200 dark:border-green-700 dark:bg-slate-800">
              <CardHeader className="bg-green-50 dark:bg-green-900/20">
                <CardTitle className="text-green-800 dark:text-green-300">Opção 2: Consultoria + Execução</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 dark:text-gray-300 text-base mb-4">
                  A Duobro executa todo o plano desenvolvido e oferece suporte durante todo o processo. 
                  Nosso modelo de trabalho é baseado em automação, desenvolvimento personalizado e 
                  relatórios de desempenho que realmente importam.
                </p>
                <Badge variant="outline" className="text-green-600 dark:text-green-400 dark:border-green-600 text-base">Completo</Badge>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-2 border-purple-200 dark:border-purple-700 dark:bg-slate-800">
              <CardHeader className="bg-purple-50 dark:bg-purple-900/20">
                <CardTitle className="text-purple-800 dark:text-purple-300">Opção 3: Consultoria + Execução + Católicos Online</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 dark:text-gray-300 text-base mb-4">
                  Neste modelo, incluiremos uma proposta diferenciada para que a Divino Amor esteja 
                  presente em nossa nova rede, a Católicos Online.
                </p>
                <Badge variant="outline" className="text-purple-600 dark:text-purple-400 dark:border-purple-600 text-base">Premium</Badge>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-xl bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardContent className="p-8 text-center bg-yellow-400">
              <h3 className="text-2xl font-bold mb-4">Sinalize seu Interesse</h3>
              <p className="text-lg mb-6 text-slate-700">Agende sua reunião até 06 de Junho</p>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" onClick={() => window.open('https://cal.duobro.com.br/joneslauriano/divino', '_blank')}>
                Escolha uma data aqui
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Agency Section */}
      <section id="agencia" className="py-16 bg-gray-900 dark:bg-slate-950 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <img src="/lovable-uploads/6cdcd176-1ea7-48e4-bb41-0f9acec3fc81.png" alt="Duobro Tech Logo" className="h-16 w-auto" />
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
                  <span>Sem fórmulas mágicas.</span>
                  </div>
                   <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />                
                  <span>Resultados reais.</span>
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
                  <div className="text-sm">Comprometido com seus resultados</div>
                </div>
              </div>
              
              <Button className="w-full mt-6 bg-white text-blue-600 hover:bg-gray-100" onClick={() => window.open('https://duobro.com.br/', '_blank')}>
                Conheça a Duobro Tech
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;