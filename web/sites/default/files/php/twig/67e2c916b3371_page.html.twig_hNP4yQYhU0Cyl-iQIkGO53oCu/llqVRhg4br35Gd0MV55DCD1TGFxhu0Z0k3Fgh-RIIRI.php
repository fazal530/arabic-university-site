<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;
use Twig\TemplateWrapper;

/* themes/custom/sass_theme_msd/templates/page/page.html.twig */
class __TwigTemplate_a46eb4257acbc1393f9942e1b89bf6ff extends Template
{
    private Source $source;
    /**
     * @var array<string, Template>
     */
    private array $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->extensions[SandboxExtension::class];
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        // line 53
        yield "<div id=\"page-wrapper\">

\t<div id=\"page\">

\t\t";
        // line 57
        if (CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "menubar", [], "any", false, false, true, 57)) {
            // line 58
            yield "\t\t\t<div class=\"menubar\">";
            yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "menubar", [], "any", false, false, true, 58), "html", null, true);
            yield "</div>
\t\t";
        }
        // line 60
        yield "
\t\t<header id=\"header\" class=\"header\" role=\"banner\">
\t\t\t<div class=\"section layout-container clearfix\">
\t\t\t\t";
        // line 63
        yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "primary_menu", [], "any", false, false, true, 63), "html", null, true);
        yield "
\t\t\t\t";
        // line 64
        yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "secondary_menu", [], "any", false, false, true, 64), "html", null, true);
        yield "
\t\t\t\t";
        // line 65
        yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "header", [], "any", false, false, true, 65), "html", null, true);
        yield "
\t\t\t</div>
\t\t</header>
\t\t";
        // line 68
        if (CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 68)) {
            // line 69
            yield "\t\t\t<div class=\"highlighted\">
\t\t\t\t<aside class=\"layout-container section clearfix\" role=\"complementary\">
\t\t\t\t\t";
            // line 71
            yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "highlighted", [], "any", false, false, true, 71), "html", null, true);
            yield "
\t\t\t\t</aside>
\t\t\t</div>
\t\t";
        }
        // line 75
        yield "\t\t";
        if (CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "featured_top", [], "any", false, false, true, 75)) {
            // line 76
            yield "\t\t\t<div class=\"featured-top\">
\t\t\t\t<aside class=\"featured-top__inner section layout-container clearfix\" role=\"complementary\">
\t\t\t\t\t";
            // line 78
            yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "featured_top", [], "any", false, false, true, 78), "html", null, true);
            yield "
\t\t\t\t</aside>
\t\t\t</div>
\t\t";
        }
        // line 82
        yield "\t\t";
        yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "breadcrumb", [], "any", false, false, true, 82), "html", null, true);
        yield "
\t\t<div id=\"main-wrapper\" class=\"page-layout-main-wrapper layout-container clearfix\">
\t\t\t<div id=\"main\" class=\"layout-main clearfix\">
\t\t\t\t";
        // line 85
        if (CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 85)) {
            // line 86
            yield "\t\t\t\t\t<div id=\"sidebar-first\" class=\"column sidebar\">
\t\t\t\t\t\t<aside class=\"section\" role=\"complementary\">
\t\t\t\t\t\t\t";
            // line 88
            yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_first", [], "any", false, false, true, 88), "html", null, true);
            yield "
\t\t\t\t\t\t</aside>
\t\t\t\t\t</div>
\t\t\t\t";
        }
        // line 92
        yield "\t\t\t\t<main id=\"content\" class=\"column main-content\" role=\"main\">
\t\t\t\t\t<section class=\"section\">
\t\t\t\t\t\t<a id=\"main-content\" tabindex=\"-1\"></a>
\t\t\t\t\t\t";
        // line 95
        yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "content", [], "any", false, false, true, 95), "html", null, true);
        yield "
\t\t\t\t\t</section>
\t\t\t\t</main>
\t\t\t\t";
        // line 98
        if (CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 98)) {
            // line 99
            yield "\t\t\t\t\t<div id=\"sidebar-second\" class=\"column sidebar\">
\t\t\t\t\t\t<aside class=\"section\" role=\"complementary\">
\t\t\t\t\t\t\t";
            // line 101
            yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "sidebar_second", [], "any", false, false, true, 101), "html", null, true);
            yield "
\t\t\t\t\t\t</aside>
\t\t\t\t\t</div>
\t\t\t\t";
        }
        // line 105
        yield "\t\t\t</div>
\t\t</div>
\t\t<footer class=\"site-footer\">
\t\t\t<div class=\"layout-container\">
\t\t\t\t";
        // line 109
        if ((((CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "footer_first", [], "any", false, false, true, 109) || CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "footer_second", [], "any", false, false, true, 109)) || CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "footer_third", [], "any", false, false, true, 109)) || CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "footer_fourth", [], "any", false, false, true, 109))) {
            // line 110
            yield "\t\t\t\t\t<div class=\"site-footer__top clearfix\">
\t\t\t\t\t\t";
            // line 111
            yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "footer_first", [], "any", false, false, true, 111), "html", null, true);
            yield "
\t\t\t\t\t\t";
            // line 112
            yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "footer_second", [], "any", false, false, true, 112), "html", null, true);
            yield "
\t\t\t\t\t\t";
            // line 113
            yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "footer_third", [], "any", false, false, true, 113), "html", null, true);
            yield "
\t\t\t\t\t\t";
            // line 114
            yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "footer_fourth", [], "any", false, false, true, 114), "html", null, true);
            yield "
\t\t\t\t\t</div>
\t\t\t\t";
        }
        // line 117
        yield "\t\t\t\t";
        if (CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "footer_fifth", [], "any", false, false, true, 117)) {
            // line 118
            yield "\t\t\t\t\t<div class=\"site-footer__bottom\">
\t\t\t\t\t\t<div class=\"footer-bg-image\">
\t\t\t\t\t\t\t<div class=\"footer-content\">
\t\t\t\t\t\t\t\t";
            // line 121
            yield $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, CoreExtension::getAttribute($this->env, $this->source, ($context["page"] ?? null), "footer_fifth", [], "any", false, false, true, 121), "html", null, true);
            yield "
\t\t\t\t\t\t\t</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t";
        }
        // line 126
        yield "\t\t\t</div>
\t\t</footer>
\t</div>
</div>
";
        $this->env->getExtension('\Drupal\Core\Template\TwigExtension')
            ->checkDeprecations($context, ["page"]);        yield from [];
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "themes/custom/sass_theme_msd/templates/page/page.html.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable(): bool
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo(): array
    {
        return array (  193 => 126,  185 => 121,  180 => 118,  177 => 117,  171 => 114,  167 => 113,  163 => 112,  159 => 111,  156 => 110,  154 => 109,  148 => 105,  141 => 101,  137 => 99,  135 => 98,  129 => 95,  124 => 92,  117 => 88,  113 => 86,  111 => 85,  104 => 82,  97 => 78,  93 => 76,  90 => 75,  83 => 71,  79 => 69,  77 => 68,  71 => 65,  67 => 64,  63 => 63,  58 => 60,  52 => 58,  50 => 57,  44 => 53,);
    }

    public function getSourceContext(): Source
    {
        return new Source("", "themes/custom/sass_theme_msd/templates/page/page.html.twig", "/var/www/html/web/themes/custom/sass_theme_msd/templates/page/page.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = ["if" => 57];
        static $filters = ["escape" => 58];
        static $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['if'],
                ['escape'],
                [],
                $this->source
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
