"""
LangMem-ProllyTree Integration
High-performance semantic memory system for AI agents.
"""

__version__ = "0.1.0"

from .core.memory_manager import ProllyTreeMemoryStoreManager
from .core.prolly_adapter import ProllyTreeStore, MemoryItem
from .taxonomy.semantic_taxonomy import SemanticTaxonomy, get_taxonomy, TaxonomyCategory
from .taxonomy.semantic_classifier import SemanticClassifier, OptimizedClassifier, ClassificationResult
from .search.hierarchical_search import HierarchicalSearchEngine, SearchStrategy, SearchResult

__all__ = [
    # Core
    "ProllyTreeMemoryStoreManager",
    "ProllyTreeStore",
    "MemoryItem",
    
    # Taxonomy
    "SemanticTaxonomy",
    "get_taxonomy",
    "TaxonomyCategory",
    
    # Classification
    "SemanticClassifier",
    "OptimizedClassifier", 
    "ClassificationResult",
    
    # Search
    "HierarchicalSearchEngine",
    "SearchStrategy",
    "SearchResult",
]